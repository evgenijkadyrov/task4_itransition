import {Card, Form, Row, Space, Typography} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../Paths";
import {InputCustom} from "../inputCustom/index.jsx";
import {ButtonCustom} from "../buttonCustom/index.jsx";
import {InputPassword} from "../password-input/index.jsx";
import {LayoutStyled} from "../layout/index.jsx";
import {login} from "../../services/users.js";
import {useContext, useState} from "react";
import {useLoginUser} from "../../hooks/useLoginUser.js";

export const Login = () => {
   const {loginUser}=useLoginUser()
    return (
        <LayoutStyled>
            <Row align="middle" justify="center">
                <Card title={"Authorization"} style={{width: "30rem"}}>
                    <Form onFinish={loginUser}>
                        <InputCustom name={"email"} placeholder={"email"} type={"email"}/>
                        <InputPassword name={"password"} placeholder={"password"}/>
                        <ButtonCustom type={"primary"} htmlType={"submit"}>
                            Log in
                        </ButtonCustom>
                    </Form>
                    <Space direction={"vertical"} size={"large"}>
                        <Typography.Text>
                            No account? Please, <Link to={Paths.register}>Sing up</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </LayoutStyled>
    );
};
