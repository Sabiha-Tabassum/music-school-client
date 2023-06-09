import { useQuery } from '@tanstack/react-query';


const AllUser = () => {
    
    const { data: user = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/user/')
        return res.json();
    })

    return[user, refetch]
};

export default AllUser;