import axios from 'axios'

export const getUsers = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const users = await axios.get('http://localhost:8001/auth/users', config)
    return users.data
}
export const registrationUser = async (userData) => {
    try {
        await axios.post('http://localhost:8001/auth/register', userData);

    } catch (error) {
        throw new Error(`Error registering user: ${error.message}`);
    }
};
export const login = async (userData) => {
    try {
        const res = await axios.post('http://localhost:8001/auth/login', userData);
        return res.data
    } catch (error) {
        throw new Error(`Error registering user: ${error.message}`);
    }
};
export const logout = () => {
    try {
        localStorage.removeItem('token');
        localStorage.removeItem('name');

    } catch (error) {
        throw new Error(`Error logout user: ${error.message}`)
    }
};
export const blockUsers = async (usersEmail) => {

    try {
        await axios.post('http://localhost:8001/auth/users/block', {
            usersEmail: usersEmail
        })

    } catch (error) {
        console.log(error)
    }


}
export const unBlockUsers = async (usersEmail) => {

    try {
        await axios.post('http://localhost:8001/auth/users/unblock', {
            usersEmail: usersEmail
        })

    } catch (error) {
        console.log(error)
    }


}
export const deleteUsers = async (usersEmail) => {

    try {
        await axios.delete('http://localhost:8001/auth/users/delete', {
            data: {usersEmail}
        })
    } catch (error) {
        console.log(error)
    }


}