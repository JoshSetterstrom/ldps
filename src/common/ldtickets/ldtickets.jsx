import { useEffect, useState } from "react";
import callTickets from "./api/callTickets";
import Ticket from './ticket/ticket';
import Options from '../optionsddl/options';
import SimpleBarReact from 'simplebar-react';


let container = {
    width: 119,
    height: 27,
    backgroundColor: '#063b50',
    color: 'white',
    textAlign: 'center',
    paddingTop: 3,
    marginRight: 2,
    fontWeight: 'bold'
}

let input = {
    width: '48%',
    minWidth: 600,
    height: 27,
    fontSize: 17,
    boxSizing: 'border-box',
    backgroundColor: "#e4f7ff"
}

function IndexButton({title}) {
    return (
        <div style={container}>
            {title}
        </div>
    )
}


function Input() {
    return (
        <input style={input}></input>
    )
}

export default function LdTickets() {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        const getData = async () => {
            let res = await callTickets()
            setTickets(res.sort((a, b) => b.isd - a.isd))
        }

        getData()
    }, [])

    function renderTickets() {
        return tickets.map((item, i) => (
            <Ticket key={`T${i}`}
                    ticket={item}
                    data={item}/>
        ))
    }

    function renderIndex() {
        return (
            <span style={{display: 'flex'}}>
                <IndexButton title='Open'/>
                <IndexButton title='Closed'/>
            </span>
        )
    }

    return (
        <span>
            <div style={{display: 'flex', marginRight: 10}}>
                <div style={{margin: '10px 0 0 10px'}}>{renderIndex()}</div>
                <Options/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '99%', margin: '7px 0 0 10px'}}>
                <Input/>
                <SimpleBarReact style={{height: 790, width: '100%', minWidth: 600, marginTop: 10}}>
                    <div>{renderTickets()}</div>
                </SimpleBarReact>
            </div>
        </span>
    )
}