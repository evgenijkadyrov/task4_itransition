import { useEffect, useState } from "react";
import { getUsers } from "../services/users.js";

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await getUsers(token);
      setUsers(res);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return { users, isLoading, fetchUsers };
};
