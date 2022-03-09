import FocusedProfileContent from "./focusedProfileContent"
import SimpleBarReact from 'simplebar-react';

// Extends Focused //
export default function FocusedProfile({style, focusedItem}) {
  return (
    <div style={style.profileContainer}>
      <div style={style.subTitle}>Profile</div>

      <SimpleBarReact 
          style = {style.profileContentContainer}>

          <FocusedProfileContent 
              style      = {style}
              itemObject = {focusedItem.data}/>
              
      </SimpleBarReact>
    </div>
  )
}