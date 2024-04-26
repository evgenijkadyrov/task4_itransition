import {useEffect, useState} from "react";
import {getUsers} from "../services/users.js";

export const useFetchUsers=()=>{
    const [users, setUsers] = useState([])
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await getUsers();
                setUsers(res)
            } catch (error) {
                console.error('Error fetching users:', error);
            }
            finally {
                setLoading(false)
            }
        };

        fetchData();
    }, []);
    return{users, isLoading}
}