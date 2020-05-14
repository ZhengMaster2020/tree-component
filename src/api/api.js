import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://cfan.cc/tc/',
  timeout: 1000
})

export default instance