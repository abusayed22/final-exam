import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { userLogged } from '../features/auth/authSlice';

function useAuthCheck() {

    const [authCheck, setAuthCheck] = useState(false);
    const dispatch = useDispatch();
    console.log(userLogged)
    const local = localStorage.getItem("auth");
    

    useEffect(() => {
        const auth = JSON.parse(local);
        console.log(auth);
        if(auth?.accessToken && auth?.user) {
            dispatch(userLogged({
                accessToken: auth.accessToken,
                user : auth.user
            }))
        }
        setAuthCheck(true);
    }, [dispatch, local])

  return authCheck
}

export default useAuthCheck