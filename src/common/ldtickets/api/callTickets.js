import axios from 'axios';

export default async function callTickets() {
    return await axios.get(`${process.env.REACT_APP_DEV_URL}ld-tickets`)
    .then((res) => {
        return new Promise((resolve, reject) => {
            resolve(res.data)
        })
    })
}