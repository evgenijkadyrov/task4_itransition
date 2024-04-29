import { useNavigate } from "react-router-dom";
import { login } from "../services/users.js";
import { Paths } from "../Paths.js";
import { useState } from "react";

export const useLoginUser = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const loginUser = async (data) => {
    try {
      const res = await login(data);
      localStorage.setItem("token", res.token);
      localStorage.setItem("name", res.user.name);
      navigate(Paths.home);
    } catch (error) {
      setError(error.message);
    }
  };

  return { loginUser, error };
};
