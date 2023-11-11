import React, { PropsWithChildren } from "react";

const Centered = ({ children }: PropsWithChildren) => {
  const styles = {
    height: "100%",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap" as any,
  };

  return <div style={styles}>{children}</div>;
};

export default Centered;
