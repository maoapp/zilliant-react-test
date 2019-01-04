import axios from 'axios'
import config from './config'

const requestConfig = {
  auth: {
    username: config.user,
    password: config.authToken
  }
}

export const getUser = axios.get(config.baseUrl + '/user', requestConfig)
