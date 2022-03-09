import * as style from "./style/profileButtonsStyle";
import {useState} from 'react';

export default function ProfileButtons({listToRender, setListToRender}) {
  const [highlighted, setHighlighted] = useState("")
  const [defaultButtons] = useState(listToRender)
  const [buttonStyle, setButtonStyle] = useState(listToRender.map(() => style.profileButton))

  const changeFilter = (item, position) => {
    if (highlighted === item.target.innerHTML) {
      setButtonStyle(defaultButtons.map(() => style.profileButton))
      setListToRender(defaultButtons)
      setHighlighted("")
      return
    }

    else {
      let newButtonState = defaultButtons.map(() => style.profileButton)
      newButtonState     = {...newButtonState, [position]: style.profileButtonHighlighted}
      setButtonStyle(newButtonState)
      setListToRender([item.target.innerHTML])
      setHighlighted(item.target.innerHTML)
    }
  }

  return (
    <div style={style.profileButtonsContainer}>
      {defaultButtons.map((item, i) => (
          <div key     = {`button${i}`} 
               onClick = {e => changeFilter(e, i)} 
               style   = {buttonStyle[i]}>
            
            {item}
          </div>
        ))}
    </div>
  )
}