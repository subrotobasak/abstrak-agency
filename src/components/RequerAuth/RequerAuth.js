import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebas.init';

const RequerAuth = ({children}) => {
   const [user] = useAuthState (auth);

   if (user) {
    return children;
   }

   else {
    return <Navigate to= "/login"/>
   }
};

export default RequerAuth;