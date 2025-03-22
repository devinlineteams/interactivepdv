import {useNavigate} from 'react-router-dom';
import {useEffect } from "react";
import ViewModelHome from './ViewModelHome';
import ViewHome from './ViewHome';

function Home(){

    const viewModel = ViewModelHome();


    return(
        <ViewHome
            {...viewModel}
        />
    );
}

export default Home;