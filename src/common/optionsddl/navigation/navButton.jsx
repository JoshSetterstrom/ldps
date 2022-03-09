import * as style from './style'

export default function NavButton({uri, content}) {
    function handleMouseEvent(e) {
        e.target.style.backgroundColor === ''
      ? e.target.style.backgroundColor = '#0c468a'
      : e.target.style.backgroundColor = ''
    }

    return (
        <a style={style.button} 
           href={uri}
           onMouseOver={e => handleMouseEvent(e)}
           onMouseLeave={e => handleMouseEvent(e)}
        >
            {content}
        </a>
    )
}