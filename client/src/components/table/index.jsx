import React, { useState } from "react";
import { Button, Checkbox, Table } from "antd";

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    id: i,
    name: `Edward King ${i}`,
    email: `test${i}@gmail.com`,
    lastLogin: new Date().toLocaleDateString(),
    status: "active",
  });
}

export const TableUsers = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleSelectAll = () => {
    setSelectedRowKeys((keys) =>
      keys.length === data.length ? [] : data.map((r) => r.key),
    );
  };

  // const start = () => {
  //     setLoading(true);
  //     // ajax request after empty completing
  //     setTimeout(() => {
  //         setSelectedRowKeys([]);
  //         setLoading(false);
  //     }, 1000);
  // };
  const handleBlock = () => {
    console.log("user block", selectedRowKeys);
  };
  const handleUnBlock = () => {
    console.log("user unBlock");
  };
  const handleDelete = () => {
    console.log("user delete");
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: () => (
        <>
          <Checkbox
            checked={selectedRowKeys.length}
            indeterminate={
              selectedRowKeys.length > 0 && selectedRowKeys.length < data.length
            }
            onChange={toggleSelectAll}
          />
          <span> Email </span>
        </>
      ),
      dataIndex: "email",
      key: "email",
    },
    {
      title: () => (
        <>
          {" "}
          <Checkbox
            checked={selectedRowKeys.length}
            onChange={toggleSelectAll}
          />
          <span>Last login </span>
        </>
      ),
      dataIndex: "lastLogin",
      key: "lastLogin",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          onClick={handleBlock}
          disabled={!hasSelected}
          loading={loading}
        >
          Block
        </Button>
        <Button
          type="primary"
          onClick={handleUnBlock}
          disabled={!hasSelected}
          loading={loading}
        >
          Unblock
        </Button>
        <Button
          type="primary"
          onClick={handleDelete}
          disabled={!hasSelected}
          loading={loading}
        >
          Delete
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};
