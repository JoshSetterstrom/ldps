import { useRef, useState } from 'react'
import Alerts from './alerts/alerts'
import NavMenu from './navigation/navMenu'
import NavButton from './navigation/navButton'
import Settings from './settings/settings'
import * as style  from './style'
import SimpleBarReact from 'simplebar-react';

export default function Options() {
    const [ddlContainer, setDdlContainer] = useState(style.ddlContainer)
    const [ddlIndicator, setDdlIndicator] = useState(style.ddlIndicator)
    const [navContent, setNavContent] = useState(style.contentClosed)
    const [alertContent, setAlertContent] = useState(style.contentClosed)
    const [settingContent, setSettingContent] = useState(style.contentClosed)
    const [currentId, setCurrentId] = useState('nav')
    const [status, setStatus] = useState(false)
    const alertRef = useRef([])

    function handleClick(id, pos) {
        if (status && id === currentId) {
            setDdlContainer({...ddlContainer, maxHeight: 0})
            setDdlIndicator({...ddlIndicator, opacity: 0})
            setNavContent(style.contentClosed)
            setAlertContent(style.contentClosed)
            setSettingContent(style.contentClosed)
            setStatus(false)
        } else {
            setDdlContainer({...ddlContainer, maxHeight: 400})
            setDdlIndicator({...ddlIndicator, opacity: 1, left: 11 + (101*pos)})
            setNavContent(style.contentOpen)
            setAlertContent(style.contentOpen)
            setSettingContent(style.contentOpen)
            setCurrentId(id)
            setStatus(true)
        }
    }

    function handleMouseLeave() {
        setDdlContainer({...ddlContainer, maxHeight: 0})
        setDdlIndicator({...ddlIndicator, opacity: 0})
        setNavContent(style.contentClosed)
        setAlertContent(style.contentClosed)
        setSettingContent(style.contentClosed)
        setStatus(false)
    }

    function handleAlertMouseEvent(ref) {
        ref.style.backgroundColor === ''
      ? ref.style.backgroundColor = '#bac6da'
      : ref.style.backgroundColor = ''
    }

    function renderAlerts(alerts) {
        return alerts.map((items, i) => (
            <div style={{cursor: 'pointer', marginTop: 5}}
                 key={`oA${i}`}
                 ref={e => alertRef.current[i] = e}
                 onMouseOver={() => handleAlertMouseEvent(alertRef.current[i])}
                 onMouseOut={() => handleAlertMouseEvent(alertRef.current[i])}>

                <div style={{fontWeight: 'bold', fontSize: 14, marginLeft: 5}}>
                    PKID: {items.pkid}
                </div>
                <div style={{fontSize: 12, marginLeft: 5}}>
                    {items.content}
                </div>
            </div>
        ))
    }

    function renderDdlContent() {
        switch(currentId) {
            case 'nav':
                return (
                    <div style={navContent}>
                        <div style={{height: 10}}/>
                        <NavButton uri='/' content='HCS Profiles'/>
                        <NavButton uri='/ld-tickets' content='ISD Tickets'/>
                    </div>
                )

            case 'alert':
                let alerts = []

                if (alerts.length < 1) {
                    return (
                        <div style={alertContent}>
                            <div style={style.alertContainer}>
                                <div style={style.noContent}>No new alerts</div>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div style={alertContent}>
                            <SimpleBarReact style={style.alertContainer}>
                                {renderAlerts(alerts)}
                            </SimpleBarReact>
                        </div>
                    )
                }

            case 'setting':
                return (
                    <div style={settingContent}></div>
                )

            default: return <div></div>
        }
    }
    
    return (
        <span onMouseLeave={handleMouseLeave} style={style.container}>
            <span style={style.menuContainer}>
                <div onClick={() => handleClick('nav', 0)}><NavMenu/></div>
                <div onClick={() => handleClick('alert', 1)}><Alerts/></div>
                <div onClick={() => handleClick('setting', 2)}><Settings/></div>
            </span>

            <span style={ddlContainer}>
                <div style={ddlIndicator}></div>
                {renderDdlContent()}
            </span>
        </span>
    )
}   