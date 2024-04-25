import './App.css'
import {Flex, Layout} from "antd";
import {Content} from "antd/es/layout/layout.js";
import {HeaderStyled} from "./components/Header/index.jsx";


const contentStyle = {
    display: 'flex',
    minHeight: '100vh',
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#ffffff',
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
};


function App() {

    return (
        <Flex gap="middle" wrap="wrap">
            <Layout style={layoutStyle}>
               <HeaderStyled/>
                <Content style={contentStyle}>Content</Content>
            </Layout>
        </Flex>
    )
}

export default App
