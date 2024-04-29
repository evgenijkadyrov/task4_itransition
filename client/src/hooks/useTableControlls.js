import { blockUsers, deleteUsers, unBlockUsers } from "../services/users.js";
import { useState } from "react";
import { useFetchUsers } from "./useFetchUsers.js";

export const useTableControls = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [error, setError] = useState("");
  const { users, fetchUsers } = useFetchUsers();
  const handleBlock = async () => {
    try {
      await blockUsers(selectedRowKeys);
      setSelectedRowKeys([]);
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
