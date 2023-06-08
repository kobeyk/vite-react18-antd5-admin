import { Spin } from "antd";

const RequestLoading = ({ tip = "Loading" }: { tip?: string }) => {
  return <Spin tip={tip} size="large" className="request-loading" />;
};

export default RequestLoading;
