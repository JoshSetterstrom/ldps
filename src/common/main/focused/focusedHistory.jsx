import SimpleBarReact from 'simplebar-react';

export default function FocusedHistory({style, profileHistory}) {
  const renderProfileHistory = () => {
    if (!profileHistory) return <div></div>

    return profileHistory['changes'].map(item => (
      <div style={{fontSize: 11}}>
        <div style={{fontWeight: 'bold'}}>{item.timestamp} - {item.action}</div>
        <div>{item.value}</div>
        <div>{'\u200B'}</div>
      </div>
    ))
  }


  return (
    <div style={style.historyContainer}>
      <div style={style.subTitle}>Profile History</div>

      <SimpleBarReact style={style.historyContentContainer}>
        <div style={{textIndent: "5px", height: "88.5%"}}>
          {renderProfileHistory()}
        </div>
      </SimpleBarReact>
    </div>
  )
} 