import { Card, Form, Row, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { Paths } from "../../Paths.js";
import { InputCustom } from "../../components/inputCustom/index.jsx";
import { ButtonCustom } from "../../components/buttonCustom/index.jsx";
import { InputPassword } from "../../components/password-input/index.jsx";
import { LayoutStyled } from "../../components/layout/index.jsx";
import { useLoginUser } from "../../hooks/useLoginUser.js";
import { ErrorMessage } from "../../components/errorMessage/index.jsx";

export const Login = () => {
  const { loginUser, error } = useLoginUser();
  return (
    <LayoutStyled>
      <Row align="middle" justify="center">
        <Card title={"Authorization"} style={{ width: "30rem" }}>
          <Form onFinish={loginUser}>
            <InputCustom name={"email"} placeholder={"email"} type={"email"} />
            <InputPassword name={"password"} placeholder={"password"} />
            <ButtonCustom type={"primary"} htmlType={"submit"}>
              Log in
            </ButtonCustom>
          </Form>
          <ErrorMessage message={error} />
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
