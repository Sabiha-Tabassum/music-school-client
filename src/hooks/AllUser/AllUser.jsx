import { useQuery } from '@tanstack/react-query';


const AllUser = () => {
    
    const { data: user = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://music-school-server-sabiha-tabassum.vercel.app/user/')
        return res.json();
    })

    return[user, refetch]
};

export default AllUser;