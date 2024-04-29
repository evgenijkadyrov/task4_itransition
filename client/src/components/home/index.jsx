import {LayoutStyled} from "../layout/index.jsx";
import {TableUsers} from "../table/index.jsx";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../Paths.js";

export const Home = () => {
    const navigate=useNavigate()
const token= localStorage.getItem("token")
    if(!token){
        navigate(Paths.login)
    }
    return (
        <LayoutStyled>
            <TableUsers/>
        </LayoutStyled>
    )
}


