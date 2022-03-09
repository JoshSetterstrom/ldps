// Extends ProfileTotal //
export default function ProfileTotalItem({item, style, profileDataToRender}) {
  if (profileDataToRender[item.toLowerCase()]?.length) {
    return (
      <div style={style.totalBarItem}>
        {`${item}: ${profileDataToRender[item.toLowerCase()]?.length}`}
      </div>
    )
  } else {
    return <div style={style.totalBarItem}>{`${item}: 0`}</div>
  }

}