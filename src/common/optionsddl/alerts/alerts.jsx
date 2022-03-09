import alert from '../images/alert.png'
import * as style from './style'

export default function Alerts() {
    return (
        <div style={style.container}>
            <img style={style.img} src={alert} alt=''/>
        </div>
    )
}