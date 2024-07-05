import React, { useContext} from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserCtx } from './context/userContext'

const useAuth = () =>{
    const { user} = useContext(UserCtx);
    return user;
}
export default function AuthGuard() {
   const isUser = useAuth();
   return isUser ? <Outlet/> : <Navigate to="/signin" />;
}
