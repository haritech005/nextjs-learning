import React from "react";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <>
      <div className="text-center pt-6 text-2xl">
        {" "}
        Page for <span className="text-red-600 font-bold">{id}</span>
      </div>
    </>
  );
};

export default page;
