import React, {useState} from "react";
import {Button, Table} from "antd";
import {useFetchUsers} from "../../hooks/useFetchUsers.js";
import {blockUsers, deleteUsers, unBlockUsers} from "../../services/users.js";

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
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const {users, fetchUsers} = useFetchUsers()
    const data = users.map(user => ({...user, key: user.email}))
    const handleBlock = async () => {
        try {
            await blockUsers(selectedRowKeys);
            setSelectedRowKeys([])
            await fetchUsers()
        } catch (error) {
            console.log(error)
        }
    };

    const handleUnBlock = async () => {
        try {
            await unBlockUsers(selectedRowKeys);
            setSelectedRowKeys([])
            await fetchUsers()
        } catch (error) {
            console.log(error)
        }
    };
    const handleDelete = async () => {
        try {
            await deleteUsers(selectedRowKeys);
            setSelectedRowKeys([]);
            await fetchUsers();
        } catch (error) {
            console.log(error);
        }
    };

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
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
                    loading={isLoading}
                >
                    Block
                </Button>
                <Button
                    type="primary"
                    onClick={handleUnBlock}
                    disabled={!hasSelected}
                    loading={isLoading}
                >
                    Unblock
                </Button>
                <Button
                    type="primary"
                    onClick={handleDelete}
                    disabled={!hasSelected}
                    loading={isLoading}
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
            <Table rowSelection={rowSelection} columns={columns} dataSource={data}/>
        </div>
    );
};
