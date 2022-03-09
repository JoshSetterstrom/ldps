import * as style from "./style/profileListStyle"
import getSearch from "../api/getSearch";
import ProfileListContainer from "./profileListContainer";

// Extends Main //
export default function ProfileList(props) {
  // Stores results from getSearch to profileDataToRender state //
  const handleInputChange = string => {
    if (props.loading.visibility === 'visible') return

    props.setProfileDataToRender(getSearch(string, props.listToRender, props.profileData))
  }
  
  return (
    <div style={style.container}>
      <input style    = {style.searchInput} 
             onChange = {e => handleInputChange(e)}/>

      <ProfileListContainer 
          style               = {style}
          listToRender        = {props.listToRender} 
          profileDataToRender = {props.profileDataToRender}
          totalToRenderNumber = {props.totalToRenderNumber}
          focused             = {props.focused}
          setFocused          = {props.setFocused}/>
    </div>
  )
}