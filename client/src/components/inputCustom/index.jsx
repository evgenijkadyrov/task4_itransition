import {Form, Input} from "antd";


export const InputCustom = ({name, placeholder, type}) => {
    return (
        <Form.Item name={name} shouldUpdate={true}
                   rules={[{required: true, message: "required field"}]}
        >
            <Input
                placeholder={placeholder}
                type={type}
                size={"large"}/>
        </Form.Item>
    );
};

