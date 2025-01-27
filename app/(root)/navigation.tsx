"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
    const path = usePathname();
  return (
    <div>
      <header>
        <li>
          <Link href="/service" className={path==="/service" ? "text-blue-600" :"text-white"}>Service</Link>
        </li>
        <li>
          <Link href="/contactus" className={path==="/contactus" ? "text-blue-600" :"text-white"}>contact Us</Link>
        </li>
      </header>
    </div>
  );
};

export default Navigation;
