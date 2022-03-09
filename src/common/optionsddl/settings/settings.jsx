import * as style from './style'

export default function Settings() {
    return (
        <div style={style.container}>
            <div style={{paddingTop: 10}}>
                <div style={style.settingsLine}></div>
                <div style={{...style.settingsLine, marginTop: 4}}></div>
                <div style={{...style.settingsLine, marginTop: 4}}></div>
            </div>
        </div>
    )
}