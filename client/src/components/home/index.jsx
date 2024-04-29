import { LayoutStyled } from "../layout/index.jsx";
import { TableUsers } from "../table/index.jsx";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../Paths.js";
import { useEffect } from "react";

export const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate(Paths.login);
    }
  }, [navigate, token]);
  return (
    <LayoutStyled>
      <TableUsers />
    </LayoutStyled>
  );
};
