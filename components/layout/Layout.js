
'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Footer1 from './Footer'
import Header1 from "./Header1"
import Header2 from './Header2'
import PageHead from './PageHead'
import { useAuth } from "@/hooks/useAuth";

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, head, children }) {
  const { session, loading } = useAuth();

  const [scroll, setScroll] = useState(0);
  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };

  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => setSearch(!isSearch);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);
  return (
    <>
      <PageHead {...head} />
      <div className="page-wrapper" id="top">
        {!headerStyle && (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            isSearch={isSearch}
            handleSearch={handleSearch}
          />
        )}
        {headerStyle == 1 ? (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            isSearch={isSearch}
            handleSearch={handleSearch}
          />
        ) : null}
        {headerStyle == 2 ? (
          <Header2
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            isSearch={isSearch}
            handleSearch={handleSearch}
          />
        ) : null}
        <main className="main">
          {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
          {children}
        </main>
        {!footerStyle && <Footer1 session={session} />}
        {footerStyle == 1 ? <Footer1 session={session} /> : null}
      </div>
      <BackToTop />
    </>
  );
}
