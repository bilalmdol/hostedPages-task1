import {useLocation} from 'react-router-dom';

const Login=()=>{

    const location =  useLocation();

    return(
        <>
            <h1>Hello {location.state.user}</h1>
        </>
    )
};
export default Login;