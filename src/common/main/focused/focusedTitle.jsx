import img from "./images/hcs.png"
import getHcsLink from "../api/getHcsLink";

export default function FocusedTitle({style, setFocused, focusedItem, locationHierarchy}) {
  return (
    <div style={style.mainTitleContainer}>
      <a 
          href   = {getHcsLink(focusedItem, locationHierarchy)} 
          target = "_blank" 
          rel    = "noreferrer" 
          style  = {{width: "100%"}}>
           
        <img 
            src   = {img} 
            alt   = "" 
            style = {style.hcsImage}></img>  
      </a>

      <div style={style.mainTitle}>{focusedItem.profile}</div>

      <div style={style.closeContainer}>
        <div onClick={() => {setFocused([])}} style={style.close}>+</div>
      </div>
    </div>
  )
}