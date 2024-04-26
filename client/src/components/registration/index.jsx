import { LayoutStyled } from "../layout";
import { Card, Form, Row, Space, Typography } from "antd";
import { InputCustom } from "../inputCustom/index.jsx";
import { ButtonCustom } from "../buttonCustom/index.jsx";
import { InputPassword } from "../password-input/index.jsx";
import { ErrorMessage } from "../errorMessage/index.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../../Paths.js";
import { useState } from "react";
import {registrationUser} from "../../services/users.js";
import {isError} from "../../utils/isError.js";

export const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (data) => {
      console.log('data',data)
      try {
          await registrationUser(data).unwrap()
          navigate('/')
      } catch (error) {
          const maybeError = isError(error)
          if (maybeError) {
              setError(error.data.message)
          } else {
              setError('Unknown error')
          }
      }
  }

  return (
    <LayoutStyled>
      <Row align="middle" justify="center">
        <Card title={"Sing up"} style={{ width: "30rem" }}>
          <Form onFinish={handleRegister}>
            <InputCustom name={"name"} placeholder={"Name"} />
            <InputCustom name={"email"} placeholder={"Email"} type={"email"} />
            <InputPassword name={"password"} placeholder={"password"} />
            <InputPassword
              name={"confirmPassword"}
              placeholder={" confirm password"}
            />
            <ButtonCustom type={"primary"} htmlType={"submit"}>
              Sing up
            </ButtonCustom>
          </Form>
          <Space direction={"vertical"} size={"large"}>
            <Typography.Text>
              Have account? Please, <Link to={Paths.login}>Log in</Link>
            </Typography.Text>
          </Space>
          <ErrorMessage message={error} />
        </Card>
      </Row>
    </LayoutStyled>
  );
};
