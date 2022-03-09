let main = {
  width: "calc(100vw - 10px)", 
  height: "calc(100vh - 6px)",
  opacity: 0.6
}

let containerTop = {
  display: 'flex',
  height: '4%'
}

let containerMiddle = {
  display: "flex",
  height: "92%"
}

let loadingContainer = {
  position: 'absolute',
  height: '100%',
  width: '100%',
}

let loadingBox = {
  position: "absolute",
  width: "70px",
  height: "60px",
  left: "45%",
  top: "50%",
  borderRadius: "5px",
  backgroundColor: "#07405b",
  color: "white",
  lineHeight: "20px",
  textAlign: "center",
  paddingTop: "10px",
  cursor: "default",
}

let loadingCircle = {
  height: 50, 
  width: 50,
}

export {
  main,
  containerTop,
  containerMiddle,
  loadingContainer,
  loadingBox,
  loadingCircle
}