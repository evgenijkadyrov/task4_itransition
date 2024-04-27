import React, {useState} from "react";
import {Header} from "antd/es/layout/layout.js";
import {Paths} from "../../Paths.js";
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../../services/users.js";
import {useLoginUser} from "../../hooks/useLoginUser.js";

const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
    height: 127,
    fontSize: "24px",
    paddingInline: 148,
    lineHeight: "64px",
    backgroundColor: "#808080",
};
const navStyle = {
    display: "flex",
    gap: "20px",
};

export const HeaderStyled = () => {
    const navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
    // const {user}=useLoginUser()
    const handleLogOut = () => {

        try {
            logout()
            setIsAuthenticated(false)
            navigate(Paths.login)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <Header style={headerStyle}>
            <div>Users</div>
            <div style={navStyle}>
                <div>Hello, user</div>
                {isAuthenticated ? <a onClick={handleLogOut} style={{color:'white'}}>Logout</a> :
                    <Link to={Paths.login} style={{color:'white'}}>Login</Link>}
                <Link to={Paths.register} style={{color:'white'}}>Registration</Link>
            </div>
        </Header>
    );
};
