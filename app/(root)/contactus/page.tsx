"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  // const data = await fetch("https://api.vercel.app/blog");
  // const posts: { id: string; title: string; content: string }[] =
  //   await data.json();
  const router = useRouter();
  return (
    <>
      {/* <ol>
      {posts.map((post) => (
        <li key={post.id}>
          <h2 className="text-2xl text-blue-700">{post.title}</h2>
          <p>{post.content}</p>
        </li>
      ))}
    </ol> */}
      <h1>Contact Us</h1>
      <button className="button-primary" onClick={() => router.push("/")}>
        Home
      </button>
    </>
  );
}
