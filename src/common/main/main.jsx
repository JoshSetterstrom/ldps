import {React, useEffect, useState} from 'react';
import 'simplebar/dist/simplebar.min.css';
import * as style from "./style/mainStyle";
import callApi from './api/callApi';
import Focused from "./focused/focused";
import Loading from "./loading/loading";
import ProfileList from "./profileList/profileList";
import Options from '../optionsddl/options'
import ProfileButtons from "./profileButtons/profileButtons";
import ProfileTotal from "./profileTotal/profileTotal";
import checkFlag from "./api/checkFlag";
import updateFlag from "./api/updateFlag";

//Extends App
export default function Main() {
  const [listToRender, setListToRender] = useState(["Phones", "Lines", "DID"])
  const [rawData, setRawData] = useState([])
  const [profileData, setProfileData] = useState([])
  const [profileDataToRender, setProfileDataToRender] = useState([])
  const [locationHierarchy, setLocationHierarchy] = useState([])
  const [profileChanges, setProfileChanges] = useState([])
  const [totalToRenderNumber, setTotalToRenderNumber] = useState(25)
  const [focused, setFocused] = useState([])
  const [main, setMain] = useState(style.main)
  const [loading, setLoading] = useState(style.loadingContainer)

  // Retrieves data from server //
  useEffect(() => {
    const getData = async () => {
      let res = await callApi()
      setRawData(res.rawData)
      setProfileData(res.cleanData)
      setProfileDataToRender(res.cleanData)
      setLocationHierarchy(res.locationHierarchy)
      setProfileChanges(res.profileChanges)
      setLoading({...style.loadingContainer, visibility: "hidden"})
      setMain({...style.main, opacity: 1})
    }

    const flag = async () => {
      let db = await checkFlag()
      
      if (db.new_data) {
        db.new_data = false
        updateFlag(db)
        let res = await callApi()
        setRawData(res.rawData)
        setProfileData(res.cleanData)
        setProfileChanges(res.profileChanges)
      }
    }

    getData()

    setInterval(() => flag(), 10000)
  }, [])

  return (
    <div style={main}>
      <Loading 
          container = {loading}
          box       = {style.loadingBox}
          circle    = {style.loadingCircle}/>

      <span style={style.containerTop}>
        <ProfileButtons
            listToRender    = {listToRender}
            setListToRender = {setListToRender}/>

        <Options/>
      </span>
      

      <span style={style.containerMiddle}>
        <ProfileList 
            focused                = {focused}
            setFocused             = {setFocused}
            listToRender           = {listToRender}
            loading                = {loading}
            profileData            = {profileData}
            profileDataToRender    = {profileDataToRender}
            setProfileDataToRender = {setProfileDataToRender}
            totalToRenderNumber    = {totalToRenderNumber}/>
        
        <Focused 
            focused           = {focused} 
            setFocused        = {setFocused} 
            locationHierarchy = {locationHierarchy}
            rawData           = {rawData}
            profileChanges    = {profileChanges}/>
      </span>

      <ProfileTotal 
          listToRender           = {listToRender}
          profileDataToRender    = {profileDataToRender} 
          totalToRenderNumber    = {totalToRenderNumber} 
          setTotalToRenderNumber = {setTotalToRenderNumber}/>
    
    </div>
  )
};