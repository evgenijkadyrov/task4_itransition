import {Content} from "antd/es/layout/layout.js";
import {LayoutStyled} from "../layout/index.jsx";

const contentStyle = {
    display: 'flex',
    minHeight: '100vh',
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#ffffff',
};


export const Home = () => (
    <LayoutStyled>

        <Content style={contentStyle}>Content</Content>

    </LayoutStyled>
);


