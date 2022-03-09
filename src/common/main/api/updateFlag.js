import axios from 'axios';

export default async function checkNewFlag(flag) {
  axios.post(`${process.env.REACT_APP_PROD_URL}ldps_workers`, flag)
};