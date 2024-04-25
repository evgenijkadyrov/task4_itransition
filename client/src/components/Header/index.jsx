import React from 'react';
import {Header} from "antd/es/layout/layout.js";
import {Paths} from "../../Paths.js";
import {Link} from "react-router-dom";
const headerStyle = {
    display: "flex",
    alignItems:"center",
    justifyContent:"space-between",
    color: '#fff',
    height: 127,
    fontSize:"24px",
    paddingInline: 148,
    lineHeight: '64px',
    backgroundColor: '#808080',
};
const navStyle={
    display:"flex",
    gap:"20px"

}

export const HeaderStyled = () => {
    return (
        <Header style={headerStyle}>
            <div>Users</div>
            <div style={navStyle}>
                <div>Hello, user</div>
                <Link to={Paths.login}>Login</Link>
                <Link to={Paths.register}>Registration</Link>
            </div>

        </Header>

    );
};

