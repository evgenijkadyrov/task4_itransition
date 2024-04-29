import { LayoutStyled } from "../../components/layout/index.jsx";
import { TableUsers } from "../../components/table/index.jsx";
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
