import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="text-xl font-bold md:text-2xl">
        Raman Gupta
      </Link>

      <ul className="flex gap-4 text-xl font-normal">
        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
