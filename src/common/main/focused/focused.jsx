import * as style from "./style/focusedStyle";
import FocusedTitle from "./focusedTitle"
import FocusedHistory from "./focusedHistory";
import FocusedProfile from "./focusedProfile"

//Extends Main
export default function Focused({focused, setFocused, locationHierarchy, rawData, profileChanges}) {
  try {
    //Disables focused for LAS and DID items as they have no individual profiles//
    if (!focused[0] || focused[1] === "las" || focused[1] === "did") return <div></div>
    
    let focusedItem = rawData[focused[1]].filter(x => x.profile === focused[0])[0]
    let profileHistory = profileChanges.filter(x => focusedItem.pkid === x.pkid)[0]

    return (
      <div style={style.container}>
        <FocusedTitle
            style             = {style}
            setFocused        = {setFocused} 
            focusedItem       = {focusedItem} 
            locationHierarchy = {locationHierarchy}/>
  
        <FocusedProfile
            style       = {style}
            focusedItem = {focusedItem}/>
  
        <FocusedHistory style={style} profileHistory={profileHistory}/>
      </div>
    )
  } catch { // Catches non-existent item if removed from api while focused //
    return <div></div>
  }
}