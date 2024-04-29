import { Flex, Layout } from "antd";
import { HeaderCustom } from "../header/index.jsx";
import styles from "./styles.module.css";

export const LayoutStyled = ({ children }) => {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout className={styles.layoutStyle}>
        <HeaderCustom />

        {children}
      </Layout>
    </Flex>
  );
};
