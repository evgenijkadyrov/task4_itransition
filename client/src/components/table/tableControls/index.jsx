import { Button } from "antd";
import {
  DeleteOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";

export const TableControls = ({
  selectedRowKeys,
  onBlock,
  onUnblock,
  onDelete,
  hasSelected,
}) => (
  <div style={{ display: "flex", gap: 10, marginBottom: 16, marginTop: 16 }}>
    <Button
      type="primary"
      onClick={onBlock}
      disabled={!hasSelected}
      icon={<LockOutlined />}
    >
      Block
    </Button>
    <Button
      type="primary"
      onClick={onUnblock}
      disabled={!hasSelected}
      icon={<UnlockOutlined />}
    >
      Unblock
    </Button>
    <Button
      type="primary"
      danger
      onClick={onDelete}
      disabled={!hasSelected}
      icon={<DeleteOutlined />}
    >
      Delete
    </Button>
    <span style={{ marginLeft: 8 }}>
      {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
    </span>
  </div>
);
