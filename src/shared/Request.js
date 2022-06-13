import axios from "axios"

const instance = axios.create({
  baseURL: "http://13.125.190.53",
  timeout: 1000,
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
})

export default instance