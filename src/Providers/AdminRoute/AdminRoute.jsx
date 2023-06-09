import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation } from 'react-router-dom';
import UseAdmin from '../../hooks/UseAdmin/UseAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const[isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress progress-info w-56 animate-ping" value="40" max="100"></progress>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;