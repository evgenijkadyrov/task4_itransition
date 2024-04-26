import { Alert } from "antd";

export const ErrorMessage = ({ message }) => {
  if (!message) {
    return null;
  }
  return <Alert message={message} type={"error"} />;
};
