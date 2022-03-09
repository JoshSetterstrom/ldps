import handleFocus from "./utils/handleFocus"
import editStyleLeave from "./utils/editStyleLeave"
import editStyleEnter from "./utils/editStyleEnter"

// Extends ProfileList //
export default function ProfileListItem({style, data, setFocused}) {
  const renderListItemsOther = () => {
    return data.slice(1).map((item, i) => (
      <div key={`LData${i}`} style={style.listItemDataOther}>
        {item['data']}
      </div>
    ))
  }

  try {
    return (
      <div style={style.listItemContainer} 
           onClick={() => handleFocus(data[0], setFocused)}
           onMouseEnter = {e => editStyleEnter(e)}
           onMouseLeave = {e => editStyleLeave(e)}>
  
        <div style={style.listItemDataMain}>{data[0]['data']}</div>
        
        <div style={style.dataContainer}>
          {renderListItemsOther()}
        </div>
      </div>
    )
  } catch { // Catches non-existent item if removed from api while focused //
    return <div></div>
  }
}