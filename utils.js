import { io } from "socket.io-client";

const baseUrl = process.env.API_BASE_URL
const socket = io(baseUrl)

async function fetchQuery(path, params = null) {
  let url
  if (params !== null) {
    url = `http://${baseUrl}/${path}/${params}`
  } else {
    url = `http://${baseUrl}/${path}`
  }
  const response = await fetch(`${url}`)
  const data = await response.json()
  return data
}

export { baseUrl, fetchQuery, socket }