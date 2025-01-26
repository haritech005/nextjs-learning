import Link from "next/link";

const categories = ["Mobiles", "Laptops", "Accessories", "Dress", "Shoes"];

export default function Categories() {
  return (
    <>
      <h1 className="text-3xl p-7 text-center text-blue-600">Categories</h1>
      <ul className="text-center text-2xl">
        {categories.map((category) => (
          <li key={category}>
            <Link href={`/products/product/${encodeURIComponent(category)}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
