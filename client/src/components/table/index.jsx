import { Table } from "antd";
import { TableControls } from "./tableControls/index.jsx";
import { ErrorMessage } from "../errorMessage/index.jsx";
import { useTableControls } from "../../hooks/useTableControlls.js";
import { transformUsers } from "../../utils/usersTransform.js";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Last login",
    dataIndex: "lastLogin",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
export const TableUsers = () => {
  const {
    users,
    handleUnBlock,
    handleDelete,
    handleBlock,
    error,
    selectedRowKeys,
    setSelectedRowKeys,
    setError,
  } = useTableControls();
  const data = transformUsers(users);

  const onSelectChange = (newSelectedRowKeys) => {
    setError("");
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <TableControls
        selectedRowKeys={selectedRowKeys}
        onBlock={handleBlock}
        onUnblock={handleUnBlock}
        onDelete={handleDelete}
        hasSelected={hasSelected}
      />
      {error && <ErrorMessage message={error} />}
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};
