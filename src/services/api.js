import { setup } from 'axios-cache-adapter'

export const api = setup({
  baseURL: 'https://api.spacexdata.com/v4/',
  cache: {
  maxAge: 15 * 60 * 1000  }
})