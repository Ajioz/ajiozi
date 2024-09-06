import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Menu() {
  
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/article', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <ul className="navigation">
      {links.map(({ href, label }) => (
        <li key={href} className={pathname === href ? 'current' : ''}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
