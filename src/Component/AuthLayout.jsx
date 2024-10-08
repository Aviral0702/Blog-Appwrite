import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Protected({children, authentication = true}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status);

    useEffect(()=> {
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus!==authentication) {
            navigate("/")  
        }
        setLoader(false)
    },[authStatus, navigate, authentication])
    return (
        loader ? <h1>Loading...</h1> : <>{children}</>
    )
}

export default Protected;


//Here we have created a protected component which will take authentication into account with the help of either the store
// or props passed by the user it will check them and then it will render the element inside the component