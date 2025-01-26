import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="text-center pt-6 text-2xl text-gray-500">
        Products Header
      </div>
      {children}
      <div className="text-center pt-6 text-2xl  text-gray-500">
        Products Footer
      </div>
    </div>
  );
};

export default layout;
