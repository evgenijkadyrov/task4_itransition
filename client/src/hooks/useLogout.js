import {logoutUser} from "../services/users.js";
import {Paths} from "../Paths.js";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const useLogout = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(
        !!localStorage.getItem("token"),
    );
    const userName = localStorage.getItem("name");
    const handleLogOut = () => {
        try {
            logoutUser();
            setIsAuthenticated(false);
            navigate(Paths.login);
        } catch (error) {
            console.log(error);
        }
    };
    return {userName, isAuthenticated, handleLogOut}
}