import { useLocation } from 'react-router-dom';

const Login = () => {

    const location = useLocation();

    return (
        <>
            <h1>{location.state.msg}</h1>
        </>
    )
};
export default Login;