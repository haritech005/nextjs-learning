import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div>This is users page</div>
      <ul>
        <li>
          <Link href="/about/users/1">User 1</Link>
        </li>
        <li>
          <Link href="/about/users/2">User 2</Link>
        </li>
        <li>
          <Link href="/about/users/3">User 3</Link>
        </li>
        <li>
          <Link href="/about/users/4">User 4</Link>
        </li>
      </ul>
    </>
  );
};

export default page;
