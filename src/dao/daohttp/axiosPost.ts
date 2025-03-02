import axios, {AxiosRequestConfig} from 'axios';


export const http = axios.create({
    baseURL:`${import.meta.env.VITE_API_BASE_URL}/`,
    headers:{
        "Access-Control-Allow-Credentials": true,
        "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0MDc4NjQ3MSwiZXhwIjoxNzQwNzg2NzcxfQ.vIyG4zYm8kAoF5MSHydSiu6aFCHE5EV5sn_gNnBknkI",
        "Content-type":"application/json",
    }
})