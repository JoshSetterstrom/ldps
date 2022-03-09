import ProfileIndexMenu from './profileIndexMenu';
import totalToRender from "./utils/totalToRender"
import ProfileListItem from "./profileListItem"
import SimpleBarReact from 'simplebar-react';

// Extends ProfileList //
export default function ProfileListContainer(props) {
  const renderListItems = (listName) => {
    return totalToRender(
      props.profileDataToRender[listName.toLowerCase()], 
      props.totalToRenderNumber)
      .map((item, i) => (
        <ProfileListItem 
            key        = {`ListItem${i}`}
            style      = {props.style}
            data       = {item}
            setFocused = {props.setFocused}/>
      ))
  }

  return (
    <SimpleBarReact 
        style={props.style.listContainer}>

        {
          props.listToRender.map((listName, i) => (
            <div key={`pIM${i}`}>
              <ProfileIndexMenu 
                  style               = {props.style}
                  profileDataToRender = {props.profileDataToRender[listName.toLowerCase()]}/>

              {renderListItems(listName)}
            </div>
          ))
        }
    </SimpleBarReact>
  )
}