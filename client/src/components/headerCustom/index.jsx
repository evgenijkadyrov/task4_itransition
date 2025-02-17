import { Header } from "antd/es/layout/layout.js";
import { Paths } from "../../Paths.js";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useLogout } from "../../hooks/useLogout.js";

export const HeaderCustom = () => {
  const { userName, isAuthenticated, handleLogOut } = useLogout();

  return (
    <Header className={styles.headerWrapper}>
      <div>Users</div>
      <div className={styles.navigate}>
        {userName && <div>Hello, {userName}</div>}
        {isAuthenticated ? (
          <a onClick={handleLogOut} style={{ color: "white" }}>
            Logout
          </a>
        ) : (
          <Link to={Paths.login} style={{ color: "white" }}>
            Login
          </Link>
        )}
        <Link to={Paths.register} style={{ color: "white" }}>
          Registration
        </Link>
      </div>
    </Header>
  );
};
