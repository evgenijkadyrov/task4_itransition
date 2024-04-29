import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {registerUser} from "../services/users.js";

export const useRegisterUser = () => {
    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleRegister = async (data) => {
        try {
            await registerUser(data);
            navigate("/login");
        } catch (error) {
            setError(error.message);
        }
    };
    return {error, handleRegister};
};
