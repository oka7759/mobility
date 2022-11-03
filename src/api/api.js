import axios from 'axios';
const baseURL = 'https://preonboarding.platdev.net/api/cars';

export async function getCarList(payload) {
  return await axios.get(baseURL, { params: payload });
}
export async function getCarDetail() {
  return await axios.get(baseURL);
}
