import { PropsWithChildren } from "react";

const FullScreenContainer = ({ children }: PropsWithChildren) => {
  return <div style={{ height: "100vh", width: "100vw" }}>{children}</div>;
};

export default FullScreenContainer;
