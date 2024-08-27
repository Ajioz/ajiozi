import Link from "next/link";

export default function Menu() {

  return (
  <>
  <ul className="navigation">
    <li className="current dropdown"><Link href="/">Home</Link>
      <ul>
        <li><Link href="/">Home</Link></li>
      </ul>
    </li>
    <li className="dropdown"><Link href="/page-about">Pages</Link>
      <ul>
        <li><Link href="/page-about">About</Link></li>
        <li className="dropdown"><Link href="/page-team">Team</Link>
          <ul>
            <li><Link href="/page-team">Team Grid</Link></li>
            <li><Link href="/page-team-details">Team Details</Link></li>
          </ul>
        </li>
        <li><Link href="/page-pricing">Pricing</Link></li>
        <li><Link href="/page-testimonial">Testimonial</Link></li>
        <li><Link href="/page-faq">FAQ</Link></li>
        <li><Link href="/page-error">404</Link></li>
      </ul>
    </li>
    <li className="dropdown"><Link href="/page-services">Services</Link>
      <ul>
        <li><Link href="/page-services">Services Grid</Link></li>
        <li><Link href="/page-service-details">Service Details</Link></li>
      </ul>
    </li>
    <li className="dropdown"><Link href="/page-projects">Projects</Link>
      <ul>
        <li><Link href="/page-projects">Projects Grid</Link></li>
        <li><Link href="/page-project-details">Project Details</Link></li>
      </ul>
    </li>
    <li className="dropdown"><Link href="/news-grid">News</Link>
      <ul>
        <li><Link href="/news-grid">News Grid</Link></li>
        <li><Link href="/news-details">News Details</Link></li>
      </ul>
    </li>
    <li><Link href="/page-contact">Contact</Link></li>
  </ul>
  </>
  )
}
