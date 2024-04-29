import {useNavigate} from "react-router-dom";
import {login} from "../services/users.js";
import {Paths} from "../Paths.js";

export const useLoginUser = () => {

    const navigate = useNavigate();
    const loginUser = async (data) => {

        try {
            const res = await login(data)
            localStorage.setItem('token', res.token);
            localStorage.setItem('name', res.user.name);

            navigate(Paths.home)
        } catch (e) {
            console.log(e)

        }
    }

    return {loginUser}
}