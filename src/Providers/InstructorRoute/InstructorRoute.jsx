import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import UseInstructor from '../../hooks/UseInstructor/UseInstructor';

const InstructorRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const[isInstructor, isInstructorLoading] = UseInstructor();
    const location = useLocation();

    if( loading || isInstructorLoading ){
        return <progress className="progress progress-info w-56 animate-ping" value="40" max="100"></progress>
    }

    if(user && isInstructor){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;