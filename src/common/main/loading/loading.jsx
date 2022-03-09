import img from "./images/loading.gif"

export default function LoadingBar({container, box, circle}) {
  return (
    <div style={container}>
      <div style={box}>
        <img style={circle} src={img} alt=""></img>
      </div>
    </div>
  )
} 