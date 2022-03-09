let container = {
    zIndex: 5,
    display: 'flex',
    width: '25%',
    height: 30,
    margin: "10px 0 0 auto",
    flexWrap: 'wrap',
    userSelect: "none",
}

let menuContainer = {
    display: 'flex',
    width: 304,
    marginLeft: 'auto'
}

let ddlContainer = {
    width: 304,
    height: 400,
    maxHeight: 0,
    marginLeft: 'auto',
    backgroundColor: "#063b50",
    borderRadius: '0 0 5px 5px',
    transition: 'all 0.5s'
}

let ddlIndicator = {
    position: 'relative',
    top: 3,
    width: 80,
    height: 1,
    backgroundColor: 'white',
    opacity: 0,
    transition: 'opacity 0.5s, left 0.3s'
}

let contentOpen = {
    maxHeight: 400,
    transition: 'all 0.6s',
    visibility: 'visible',
    overflow: 'hidden'
}

let contentClosed = {
    maxHeight: 0,
    transition: 'all 0.4s',
    visibility: 'hidden',
    overflow: 'default'
}

let alertContainer = {
    width: '90%',
    height: 375,
    maxHeight: 375,
    margin: '10px auto 0 auto',
    border: '1px solid #022129',
    borderRadius: 5,
    backgroundColor: '#e4f7ff'
}

let noContent = {
    width: 100,
    height: '100%',
    margin: '170px auto 0 auto',
    opacity: 0.4
}

export {
    container,
    menuContainer,
    ddlContainer,
    ddlIndicator,
    contentOpen,
    contentClosed,
    alertContainer,
    noContent
}