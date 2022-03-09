import { useCallback, useState} from "react";

// Extends ProfileTotal //
export default function ProfileTotalInput({style, totalToRenderNumber, setTotalToRenderNumber}) {
  const [userInputRecord, setUserInputRecord] = useState("");

  // Event listener to check items/page value on user input // 
  const onKeyPress = useCallback(e => {
    if (e.key === "Enter") setTotalToRenderNumber(userInputRecord);
  }, [setTotalToRenderNumber, userInputRecord]);


  // Renders items/page element //
  return (
    <div id={'pTiC'} style={style.totalInputContainer}>
      <div style={style.totalTitleOther}>Items/Page</div>

      <input placeholder = {totalToRenderNumber} 
             style       = {style.totalInput} 
             onChange    = {e => setUserInputRecord(parseInt(e.target.value))}
             onKeyPress  = {onKeyPress}/>

      <div style   = {style.totalButton}
           onClick = {() => !userInputRecord 
                          ? {/*pass*/}
                          : setTotalToRenderNumber(userInputRecord)}>
          
        <div style={style.totalButtonLine}></div>  
      </div>

    </div>
  );
};