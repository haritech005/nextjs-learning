import React, { ReactNode } from "react";
import Navigation from "./navigation";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1 className="text-3xl"> <Navigation/></h1>
      {children}
      <h1 className="text-3xl">Root Footer</h1>
    </div>
  );
};

export default layout;
