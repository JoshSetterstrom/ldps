import axios from 'axios';

export default async function checkFlag() {
  return axios.get(`${process.env.REACT_APP_PROD_URL}ldps_workers`)
    .then((res, err) => {
      return new Promise((resolve, reject) => {
        resolve(res.data[0])
        reject(err)
      })
    })
};