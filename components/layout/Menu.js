import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="navigation">
        <li className="current">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/page-services">Services</Link>
        </li>
        <li>
          <Link href="/page-projects">Projects</Link>
        </li>
        <li>
          <Link href="/article">Blog</Link>
        </li>
        <li>
          <Link href="/page-contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
