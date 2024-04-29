import { Flex, Layout } from "antd";
//import { HeaderStyled } from "../header/index.jsx";
import styles from "./styles.module.css";

export const LayoutStyled = ({ children }) => {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout className={styles.layoutStyle}>
        {/*<HeaderStyled />*/}

        {children}
      </Layout>
    </Flex>
  );
};
