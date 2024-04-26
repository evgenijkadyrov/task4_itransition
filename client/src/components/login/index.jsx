import React, { useState } from "react";
import { Card, Form, Row, Space, Typography } from "antd";

import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../../Paths";

import { InputCustom } from "../inputCustom/index.jsx";
import { ButtonCustom } from "../buttonCustom/index.jsx";
//import {ErrorMessage} from "../errorMessage/index.jsx";
import { InputPassword } from "../password-input/index.jsx";
//import {isError} from "../../utils/isError.js";
import { LayoutStyled } from "../layout/index.jsx";

export const Login = () => {
  // const [loginUser, loginUserResult] = useLoginMutation()
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = () => {
    console.log("Login");
  };
  return (
    <LayoutStyled>
      <Row align="middle" justify="center">
        <Card title={"Authorization"} style={{ width: "30rem" }}>
          <Form onFinish={login}>
            <InputCustom name={"email"} placeholder={"email"} type={"email"} />
            <InputPassword name={"password"} placeholder={"password"} />
            <ButtonCustom type={"primary"} htmlType={"submit"}>
              Log in
            </ButtonCustom>
          </Form>
          <Space direction={"vertical"} size={"large"}>
            <Typography.Text>
              No account? Please, <Link to={Paths.register}>Sing up</Link>
            </Typography.Text>
            {/*<ErrorMessage message={error}/>*/}
          </Space>
        </Card>
      </Row>
    </LayoutStyled>
  );
};
