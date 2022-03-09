import { useRef, useState } from "react"
import SimpleBarReact from 'simplebar-react';
import * as style from './style'

export default function Ticket({data}) {
    const [bodyHTML, setBodyHTML] = useState(formatBody(data.body))
    const ticketRef = useRef(null)
    const bodyRef = useRef(null)
    const itemRef = useRef(null)

    function renderItems() {
        return Object.keys(data.items).map((item, i) => (
            <div key={`Ti${i}`}>{item}: {data.items[item]}</div>
        ))
    }

    function handleClick(ticketRef, bodyRef, itemRef) {
        if (ticketRef.current.style.height === '80px') {
            ticketRef.current.style.height = '300px';
            bodyRef.current.style.height = '230px';
            // itemRef.current.style.height = '200px'
            setBodyHTML(formatBody(data.body, true))
        } else {
            ticketRef.current.style.height = '80px';
            bodyRef.current.style.height = '20px'
            setBodyHTML(formatBody(data.body, false))
        }
    }   

    function handleMouseEvent(e) {
        e.backgroundColor === 'rgb(228, 247, 255)'
      ? e.backgroundColor = '#bac6da'
      : e.backgroundColor = '#e4f7ff'
    }

    function formatBody(body, expanded) {
        function format(item) {
            if (item === '') return <div style={{height: 17}}></div>
            if (item.includes('From: ')) {
                return (
                    <div>
                        <div style={{height: 1, width: '100%', backgroundColor: 'black'}}/>
                        <div style={{marginTop: 10, whiteSpace: 'initial'}}>{item}</div>
                    </div>
                )
            } else return <div style={{whiteSpace: 'initial'}}>{item}</div>
        }

        function removeTrailingSpace() {
            let cleanBody = body.split('\n').reverse()

            for (let i = 0; i < cleanBody.length; i++) {
                if (!cleanBody[i]) cleanBody.splice(i, 1)
                else break
            }

            return cleanBody.reverse().map((item, i) => (
                <div>{format(item)}</div>
            ))
        }

        if (expanded) return <SimpleBarReact style={style.bodyContent}>{removeTrailingSpace()}</SimpleBarReact>
        else return <div style={style.bodyContent}>{removeTrailingSpace()}</div>
    }

    function formatDate(date) {
        const months = {
            Jan: '01',
            Feb: '02',
            Mar: '03',
            Apr: '04',
            May: '05',
            Jun: '06',
            Jul: '07',
            Aug: '08',
            Sep: '09',
            Oct: '10',
            Nov: '11',
            Dec: '12',
          }

        date = (date.split(' ')[0]).split('-')
        return `${Object.keys(months).filter(i => months[i] === date[1])[0]} ${date[2]}, ${date[0]}`
    }

    function formatTime(date) {
        return `${date.split(' ')[1]} ${date.split(' ')[2]}`
    }

    let itemContainer = {
        margin: '5px 0 0 15px',
        fontSize: 15,
        width: '100px',
        height: 200,
        overflow: 'hidden',
        transition: 'all 0.5s'
    }

    return (
        <span style={style.container}
              ref={ticketRef}
              onMouseEnter={() => handleMouseEvent(ticketRef.current.style)}
              onMouseLeave={() => handleMouseEvent(ticketRef.current.style)}
              onClick={() => {handleClick(ticketRef, bodyRef, itemRef)}}>

            <div style={style.mainInfoContainer}>
                <div style={style.isd}>{data.isd}</div>
                <div style={style.status}>{data.status}</div>
                <div ref={itemRef} style={itemContainer}>{renderItems()}</div>
            </div>

            <div style={style.subInfoContainer}>
                <div style={style.subject}>{data.subject}</div>
                <div ref={bodyRef} style={style.body}>{bodyHTML}</div>
            </div>

            <div style={style.timeContainer}>
                <div>{formatTime(data.date)}</div>
                <div>{formatDate(data.date)}</div>
            </div>
        </span>
    )
}