"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
    const router = useRouter();
  return (
    <div>
      <h1>Service Page</h1>
      <button className="button-primary" onClick={()=> router.push("/") }>Home</button>
    </div>
  );
};

export default Page;
