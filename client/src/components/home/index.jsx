import { LayoutStyled } from "../layout/index.jsx";
import { TableUsers } from "../table/index.jsx";

const contentStyle = {
  display: "flex",
  minHeight: "100vh",
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#ffffff",
};

export const Home = () => (
  <LayoutStyled>
    <TableUsers />
  </LayoutStyled>
);
