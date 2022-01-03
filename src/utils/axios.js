import axios from 'axios'

const config = {
  baseURL: 'https://localhost:3000/api/v1/',
  timeout: 3000,
  headers: {
    'content-type': 'application/json'
  }
}

export default axios.create(config);