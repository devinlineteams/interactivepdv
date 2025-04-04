import {useState} from 'react';
import axios, {AxiosRequestConfig} from 'axios';

    const axiosInstance = axios.create({
        baseURL:`${import.meta.env.VITE_API_BASE_URL}/`
    })

export const usePost = <T, P> (endpoint:string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<number | null>(null);

    const postData = async (postData: P, config?: AxiosRequestConfig) => {

        setData(null);
        setLoading(true);
        setError(null)

        try{
        
            const response = await axiosInstance({
                url:endpoint,
                method:'POST',
                data:postData,
                headers:{
                    "Access-Control-Allow-Credentials": true,
                    "Content-type":"application/json",
                    ...config?.headers
                },
                ... config

            } )
       
            setData(response.data)
        }catch(e:any){
    
            setError(e.response.status ?? 500)
        }finally{
            setLoading(false)
        }
        
    }
    
    return {data, loading, error, postData}
}

        /* fetch('https://example.com/api/data', {
                mode:  'cors' 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    key1: 'value1',
                    key2: 'value2'
                })
                })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));*/