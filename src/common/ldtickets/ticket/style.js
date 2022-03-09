let container = {
    display: 'flex',
    height: 80, 
    width: '48%',
    minWidth: 600,
    backgroundColor: '#e4f7ff',
    marginBottom: 8,
    borderRadius: '10px 5px 5px 5px',
    cursor: 'pointer',
    transition: 'all 0.5s'
}

let mainInfoContainer = {
    display: 'flex',
    width: '15%',
    flexDirection: 'column'
}

let subInfoContainer = {
    display: 'flex',
    width: '65%',
    flexDirection: 'column'
}

let timeContainer = {
    width: '20%',
    textAlign: 'right',
    margin: '18px 20px 0 0'
}

let isd = {
    width: '85%',
    color: '#e4f7ff',
    paddingLeft: 15,
    lineHeight: 2.2,
    height: 40,
    fontSize: 18,
    backgroundColor: '#063b50',
    borderRadius: '5px 0 0 0'
}

let status = {
    fontSize: 20,
    margin: '5px 0 0 15px',
    textTransform: 'capitalize'
}

let subject = {
    fontSize: 18,
    margin: '7px 0 0 10px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
}

let body = {
    fontSize: 12,
    opacity: 0.5,
    height: 20,
    margin: '23px 0 0 10px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    transition: 'all 0.5s'
}

let bodyContent = {
    display: 'flex', 
    flexDirection: 'column', 
    width: '100%', 
    height: 230,
}

export {
    container,
    mainInfoContainer,
    subInfoContainer,
    timeContainer,
    isd,
    status,
    subject,
    body,
    bodyContent
}