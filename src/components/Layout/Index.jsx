import React from "react";
import { Header, Sidebar } from "../Index";

const Index = ({ children }) => {
  return (
    <div className="flex">
      <div className="" style={{ height: "100vh" }}>
        <Sidebar />
      </div>
      <div className="" style={{ width: "100%" }}>
        <div>
          <Header />
        </div>
        <div className="pb-16" style={{ height: "100vh", overflowY: "scroll" }}>{children}</div>
      </div>
    </div>
  );
};

export default Index;
