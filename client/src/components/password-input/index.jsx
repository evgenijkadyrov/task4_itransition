import {Form, Input} from "antd";

export const InputPassword = ({name, placeholder, dependencies}) => {
    return (
        <Form.Item
            name={name}
            dependencies={dependencies}
            hasFeedback
            rules={[
                {
                    required: true,
                    message: "Required field",
                },
                ({getFieldValue}) => ({
                    validator(_, value) {
                        if (!value) {
                            return Promise.resolve();
                        }
                        if (name === "confirmPassword") {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error("Passwords not identify"));
                        }
                        return Promise.resolve();
                    },
                }),
            ]}
        >
            <Input.Password placeholder={placeholder} size={"large"}/>
        </Form.Item>
    );
};
