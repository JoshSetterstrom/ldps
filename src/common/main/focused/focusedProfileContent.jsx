import editStyleEnter from "./utils/editStyleEnter"
import editStyleLeave from "./utils/editStyleLeave"


// Extends FocusedDataList //
export default function FocusedProfileContent({style, itemObject}) {
  const renderProfileContent = (selector, value, indent, key) => {
    // Renders first level object keys //
    if (value === null) return (
      <div key          = {"fPC"+key}
           style        = {{display: "flex"}}
           onMouseEnter = {e => editStyleEnter(e)}
           onMouseLeave = {e => editStyleLeave(e)}>
  
        <div style={{width: "50%", textIndent: `${indent*15+3}px`}}>{selector}</div>
        <div style={{width: "50%", textIndent: "5px", direction: "rtl"}}>null</div>
      </div>
    )
  
    // If object has an object value, this will render the next object key with an indent //
    // This will also call itself to render the next object //
    if (typeof(value) === "object") {
      return (
        <div key          = {"fPC"+key}>
          <div style        = {{display: "flex"}}
               onMouseEnter = {e => editStyleEnter(e)}
               onMouseLeave = {e => editStyleLeave(e)}>
  
            <div style={{textIndent: `${indent*15+3}px`}}>{selector}</div>
            <div style={style.profileContentSeparator}></div>
          </div>
          
          {
            Object.keys(value).map((new_selector, i) => (
              renderProfileContent(new_selector, value[new_selector], indent+1, i)
            ))
          }
        </div>
      )
    }
    
    // Renders object's data if object value is not an object //
    else return (
      <div key          = {"fPC"+key}
           style        = {{display: "flex"}}
           onMouseEnter = {e => editStyleEnter(e)}
           onMouseLeave = {e => editStyleLeave(e)}>

        <div style={{width: "50%", textIndent: `${indent*15+3}px`}}>{selector}</div>
        <div style={{width: "50%", direction: "rtl", marginRight: "5px"}}>{value}</div>
      </div>
    )
  }


  return Object.keys(itemObject).map((item, i) => (
    renderProfileContent(item, itemObject[item], 0, i)
  ))  
}