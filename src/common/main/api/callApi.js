import axios from 'axios';
import getDeviceData from "./getDeviceData";
import getUserData from "./getUserData";
import getLineData from "./getLineData";
import getVoicemailData from "./getVoicemailData";
import getLasData from './getLasData';
import getDidData from './getDidData';

let routes = ['phones', 'subscribers', 'lines', 'voicemail', 'did', 'las', 'location_hierarchy', 'profile_changes']

export default async function callApi() {
  let rawData = {};
  let cleanData = {};
  let locationHierarchy = {};
  let profileChanges = {};
  let promises = routes.map(route => axios.get(`${process.env.REACT_APP_DEV_URL}${route}`))

  return await axios.all(promises)
    .then(axios.spread((...res) => {
      res.forEach(async data => {
        let type      = data.request.responseURL.split('/').at(-1)
        rawData[type] = data.data

        switch(type) {
          case 'phones':             cleanData[type]   = getDeviceData(data.data); break;
          case 'subscribers':        cleanData[type]   = getUserData(data.data); break;
          case 'lines':              cleanData[type]   = getLineData(data.data); break;
          case 'voicemail':          cleanData[type]   = getVoicemailData(data.data); break;
          case 'did':                cleanData[type]   = getDidData(data.data); break;
          case 'las':                cleanData[type]   = getLasData(data.data); break;
          case 'location_hierarchy': locationHierarchy = data.data; break;
          case 'profile_changes':    profileChanges    = data.data; break;
          default:                   break
        }
      });
    }))
    .then(() => {
      return new Promise((resolve, reject) => {
        resolve({
          "rawData": rawData,
          "cleanData": cleanData, 
          "locationHierarchy": locationHierarchy,
          "profileChanges": profileChanges
        })
      });
    })
    .catch(() => {
      return new Promise((resolve, reject) => {
        resolve({
          "rawData": {},
          "cleanData": {}, 
          "locationHierarchy": {},
          "profileChanges": {}
        })
      })
    })
};