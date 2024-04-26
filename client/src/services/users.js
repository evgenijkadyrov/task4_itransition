import axios from 'axios'

export const getUsers= async ()=>{
    const users = await axios.get('http://localhost:8001/api/users')
    return users.data
}
export const registrationUser = async (userData) => {
    try {
       await axios.post('http://localhost:8001/api/users/register', userData);

    } catch (error) {
        throw new Error(`Error registering user: ${error.message}`);
    }
};