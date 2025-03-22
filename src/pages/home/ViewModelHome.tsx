
import {useNavigate} from 'react-router-dom';
import {useEffect } from "react";

function ViewModelHome(){

    const navigate = useNavigate();

    useEffect(()=>{
        navigate('/login');
    })

    return{

    }
       
    
}

export default ViewModelHome;