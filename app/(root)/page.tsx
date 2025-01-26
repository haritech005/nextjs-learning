import Link from "next/link";
import Tech from "../Components/tech";

export default function Home() {
  console.log("what am i doing here --Server/Client");
  return (
    <>
      <h1 className="text-3xl">Welcome To Next.js</h1>
      <Tech />
      <li>
        <Link href="/about/users">Users</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
    </>
  );
}
