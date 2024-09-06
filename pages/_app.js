import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../public/css/bootstrap.min.css";
import "../public/css/style.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  let timeoutId;

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) { //check of the page is alaredy cached before and ignore it being loaded from raw source
        timeoutId = setTimeout(() => setLoading(true), 100); // 100ms delay to remove loader
      }
    };
    const handleComplete = () => {
      clearTimeout(timeoutId);
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    const WOW = require("wowjs");
    window.wow = new WOW.WOW({ live: false });
    window.wow.init();

    return () => {
      clearTimeout(timeoutId);
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <SessionProvider session={pageProps.session}>
      {loading ? (
        <div className="preloader">
          <span className="loader"></span>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

export default MyApp;
