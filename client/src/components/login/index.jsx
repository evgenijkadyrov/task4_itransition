import { Card, Form, Row, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { Paths } from "../../Paths";
import { InputCustom } from "../inputCustom/index.jsx";
import { ButtonCustom } from "../buttonCustom/index.jsx";
import { InputPassword } from "../password-input/index.jsx";
import { LayoutStyled } from "../layout/index.jsx";
import { useLoginUser } from "../../hooks/useLoginUser.js";
import { ErrorMessage } from "../errorMessage";

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
