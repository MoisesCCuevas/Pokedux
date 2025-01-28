import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center bg-teal-500 m-8">
      {children}
    </div>
  );
};

export default Layout;
