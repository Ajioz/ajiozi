"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <ul className="navigation clearfix">
        {/*Keep This Empty / Menu will come through Javascript*/}
        <li className="current dropdown">
          <Link href="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link href="/services">Services</Link>
        </li>
        <li className="dropdown">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="dropdown">
          <Link href="/news-grid">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
