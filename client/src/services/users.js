import axios from "axios";

const instance = axios.create({
  baseURL: "https://task4-itransition-65ds.vercel.app",
});
export const getUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const users = await instance.get("/auth/users", config);
  return users.data;
};
export const registerUser = async (userData) => {
  try {
    await instance.post("/auth/register", userData);
  } catch (error) {
    throw new Error(`Error register user: ${error.response.data.message}`);
  }
};
export const login = async (userData) => {
  try {
    const res = await instance.post("/auth/login", userData);
    return res.data;
  } catch (error) {
    throw new Error(`Error login user: ${error.response.data.message}`);
  }
};
export const logoutUser = () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
  } catch (error) {
    throw new Error(`Error logout user: ${error.message}`);
  }
};
export const blockUsers = async (usersEmail) => {
  try {
    const res = await instance.post("auth/users/block", {
      usersEmail: usersEmail,
      userEmail: localStorage.getItem("email"),
    });
    return res.data;
  } catch (error) {
    throw new Error(`Error blocking users: ${error.response.data.message}`);
  }
};
export const unBlockUsers = async (usersEmail) => {
  try {
    await instance.post("/auth/users/unblock", {
      usersEmail: usersEmail,
    });
  } catch (error) {
    throw new Error(`Error unblocking users: ${error.response.data.message}`);
  }
};
export const deleteUsers = async (usersEmail) => {
  try {
    await instance.delete("/auth/users/delete", {
      data: { usersEmail },
    });
  } catch (error) {
    throw new Error(`Error deleting users: ${error.response.data.message}`);
  }
};
