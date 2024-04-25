import React from 'react';
import {Flex, Layout} from "antd";
import {HeaderStyled} from "../header/index.jsx";

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
};
export const LayoutStyled = ({children}) => {
    return (
        <Flex gap="middle" wrap="wrap">
            <Layout style={layoutStyle}>
                <HeaderStyled/>

                {children}
            </Layout>
        </Flex>
    );
};

