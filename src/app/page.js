import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/api/products"}>Open Product API</Link>
      <h1>HEllo Workd </h1>
    </main>
  );
}
