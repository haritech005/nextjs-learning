import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header className="text-center p-6 text-2xl text-gray-500">
        Products Header
      </header>
      {children}
      <footer className="text-center pt-6 text-2xl  text-gray-500">
        Products Footer
      </footer>
    </div>
  );
};

export default layout;
