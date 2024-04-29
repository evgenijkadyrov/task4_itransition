import { blockUsers, deleteUsers, unBlockUsers } from "../services/users.js";
import { useState } from "react";
import { useFetchUsers } from "./useFetchUsers.js";
import { Paths } from "../Paths.js";
import { useNavigate } from "react-router-dom";

export const useTableControls = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [error, setError] = useState("");
  const { users, fetchUsers } = useFetchUsers();
  const navigate = useNavigate();
  const handleBlock = async () => {
    try {
      const res = await blockUsers(selectedRowKeys);
      setSelectedRowKeys([]);
      if (res.blockItself) {
        localStorage.clear();
        return navigate(Paths.login);
      }
      await fetchUsers();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUnBlock = async () => {
    try {
      await unBlockUsers(selectedRowKeys);
      setSelectedRowKeys([]);
      await fetchUsers();
    } catch (error) {
      setError(error.message);
    }
  };
  const handleDelete = async () => {
    try {
      await deleteUsers(selectedRowKeys);
      setSelectedRowKeys([]);
      await fetchUsers();
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    error,
    handleDelete,
    handleUnBlock,
    handleBlock,
    users,
    selectedRowKeys,
    setSelectedRowKeys,
    setError,
  };
};
