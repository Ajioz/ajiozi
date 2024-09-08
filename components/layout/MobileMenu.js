"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About us' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/article', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <ul className="navigation clearfix">
      {links.map(({ href, label }) => (
        <li key={href} className={pathname === href ? 'current' : ''}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
