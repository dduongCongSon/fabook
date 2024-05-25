import axios from "axios";
export const getUser =()=>{
    const API = axios.create({baseURL:"https://664b523535bbda10987c72ff.mockapi.io"})
    return API.get("/api/v1/users")
}