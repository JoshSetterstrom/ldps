import navigation from '../images/navigation.png'
import * as style from './style'

export default function NavMenu() {
    return (
        <div style={style.menuContainer}>
            <img style={style.img} src={navigation} alt=''/>
        </div>
    )
}