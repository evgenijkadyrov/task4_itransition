import {Button, Form} from "antd";

export const ButtonCustom = ({
                                 children,
                                 htmlType,
                                 type,
                                 danger,
                                 loading,
                                 shape,
                                 icon,
                                 onClick,
                             }) => {
    return (
        <Form.Item>
            <Button
                htmlType={htmlType}
                type={type}
                danger={danger}
                loading={loading}
                shape={shape}
                icon={icon}
                onClick={onClick}
            >
                {children}
            </Button>
        </Form.Item>
    );
};
