import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1 className="text-3xl"> Root Header</h1>
      {children}
      <h1 className="text-3xl">Root Footer</h1>
    </div>
  );
};

export default layout;
