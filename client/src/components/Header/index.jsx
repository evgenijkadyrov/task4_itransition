import React from 'react';
import {Header} from "antd/es/layout/layout.js";
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
                <div>Login</div>
                <div>Registration</div>
            </div>

        </Header>

    );
};

