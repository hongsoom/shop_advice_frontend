import axios from "axios";

const instance  = axios.create({
  baseURL: "http://3.34.42.87:3000",
  timeout: 1000,
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
})

export default instance
