let profileButtonsContainer = {
  display: "flex", 
  margin: "10px 0 0 10px"
};

let profileButton = {
  backgroundColor: "#063b50",
  width: 119,
  height: 27,
  marginRight: "2px",
  textAlign: "center",
  paddingTop: "3px",
  cursor: "pointer",
  userSelect: "none",
  fontWeight: "bold",
  color: "white",
};

let profileButtonHighlighted = {
  ...profileButton,
  width: 115,
  height: 25,
  border: "2px solid #e4f7ff",
  paddingTop: "1px",
};

export {
  profileButtonsContainer,
  profileButton,
  profileButtonHighlighted
};