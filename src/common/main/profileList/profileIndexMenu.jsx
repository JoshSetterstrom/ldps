// Extends ProfileListContainer //
export default function ProfileIndexMenu({style, profileDataToRender}) {
  const renderIndexMenuMainItem = () => {
    try {
      return <div style={style.indexDataMain}>{profileDataToRender[0].slice(0, 1)[0].index}</div>

    }
    catch {<div></div>}
  }

  const renderIndexMenuSubItems = () => {
    try {
      return profileDataToRender[0].slice(1).map((item, i) => (
        <div style={style.indexDataOther} key={"pDTR"+i}>{item['index']}</div>)
      )
    }
    catch {<div></div>}
  }

  return (
    <div style={style.indexContainer}>
      {renderIndexMenuMainItem()}

      <div style={style.dataContainer}>
        {renderIndexMenuSubItems()}
      </div>
    </div>
  )
}