import * as style from "./style/profileTotalStyle"
import ProfileTotalItem from "./profileTotalItem"
import ProfileTotalInput from "./profileTotalInput";

// Extends Main //
export default function ProfileTotal({totalToRenderNumber, setTotalToRenderNumber,
                                      profileDataToRender, listToRender}) {

  // Renders each total item //
  // What's rendered is dependent on the listToRender state //
  const renderTotalItems = () => {
    return listToRender?.map((item, i) => (
      <ProfileTotalItem 
          key                 = {`pTtI_${i}`}
          item                = {item}
          style               = {style}
          profileDataToRender = {profileDataToRender}/>
    ));
  };


  // Renders all components of ProfileTotal //
  return (
    <div id={'pTtC'} style={style.totalContainer}>
      <div id={'pTtM'} style={style.totalTitleMain}>Total Count:</div>
      
      {renderTotalItems()}

      <ProfileTotalInput 
          style                  = {style} 
          totalToRenderNumber    = {totalToRenderNumber} 
          setTotalToRenderNumber = {setTotalToRenderNumber}/>
    </div>
  );
};