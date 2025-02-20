import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <h1>About</h1>
      <h2><Link href="about/users">users</Link></h2>
    </>
  );
};

export default Page;
