import {LayoutStyled} from "../layout";
import {Card, Form, Row, Space, Typography} from "antd";
import {InputCustom} from "../inputCustom/index.jsx";
import {ButtonCustom} from "../buttonCustom/index.jsx";
import {InputPassword} from "../password-input/index.jsx";
import {Link} from "react-router-dom";
import {Paths} from "../../Paths.js";
import {ErrorMessage} from "../errorMessage";
import {useRegisterUser} from "../../hooks/useRegisterUser.js";

export const Register = () => {
    const {error, handleRegister} = useRegisterUser();
    return (
        <LayoutStyled>
            <Row align="middle" justify="center">
                <Card title={"Sing up"} style={{width: "30rem"}}>
                    <Form onFinish={handleRegister}>
                        <InputCustom name={"name"} placeholder={"Name"}/>
                        <InputCustom name={"email"} placeholder={"Email"} type={"email"}/>
                        <InputPassword name={"password"} placeholder={"password"}/>
                        <InputPassword
                            name={"confirmPassword"}
                            placeholder={" confirm password"}
                        />
                        <ButtonCustom type={"primary"} htmlType={"submit"}>
                            Sing up
                        </ButtonCustom>
                    </Form>
                    {error && <ErrorMessage message={error}/>}
                    <Space direction={"vertical"} size={"large"}>
                        <Typography.Text>
                            Have account? Please, <Link to={Paths.login}>Log in</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </LayoutStyled>
    );
};
