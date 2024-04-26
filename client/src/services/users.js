import axios from 'axios'

export const getUsers= async ()=>{
    const users = await axios.get('http://localhost:8001/api/users')
    return users.data
}