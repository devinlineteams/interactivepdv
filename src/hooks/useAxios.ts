import {useState} from 'react';
import axios, {AxiosRequestConfig} from 'axios';

const axiosInstance = axios.create({
    baseURL:`${import.meta.env.VITE_API_BASE_URL}/`
})

export const usePost = <T, P> (endpoint:string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<number | null>(null);

    const postData = async (postData: P, config?:AxiosRequestConfig) => {

        /*try{
            url: endpoint,
            method: 'POST',
            data: postData,
            headers:{

            }
        }*/
        
    }

}