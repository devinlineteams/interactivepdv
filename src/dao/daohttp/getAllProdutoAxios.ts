import {useState} from 'react';
import axios, {AxiosRequestConfig} from 'axios';

const axiosInstance = axios.create({
    baseURL:`${import.meta.env.VITE_API_BASE_URL}/`
})

export const getAllProducto =<T, P> (andPoint:string) =>{
    const [data, setData] = useState<T | null>(null);
    console.log(" entrou no metodo que contem o axios")

    const getProduto = async (postData: P, config?: AxiosRequestConfig) =>{

        console.log(" entrou no 2 metodo que contem o axios")
        try{
            const response = await axiosInstance({
                url:andPoint,
                method:'POST',
                data:postData,
                headers:{
                    "Access-Control-Allow-Credentials": true,
                    "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0MDc4NjQ3MSwiZXhwIjoxNzQwNzg2NzcxfQ.vIyG4zYm8kAoF5MSHydSiu6aFCHE5EV5sn_gNnBknkI",
                    "Content-type":"application/json",
                    ...config?.headers
                },
                ... config

            } )

            setData(response.data)
        }catch(e:any){
            console.log(`Entrou no erro ${e}`)
           // setError(e.response.status ?? 500)

        }finally{
            console.log(`Entrou no finally`)
          //  setLoading(false)
        }
        
    }
}