import { SessionProvider } from "next-auth/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../public/css/bootstrap.min.css";
import "../public/css/style.css";

//import '../public/css/responsive.css';

//import 'swiper/css/effect-coverflow';

//import "swiper/css/free-mode";
//import "swiper/css/thumbs";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);
  return (
    // <SessionProvider session={pageProps.session}>
    //   <Component {...pageProps} />
    // </SessionProvider>
    <SessionProvider session={pageProps.session}>
      {!loading ? (
        <Component {...pageProps} />
      ) : (
        <div className="preloader">
          <span className="loader"></span>
        </div>
      )}
    </SessionProvider>
  );
}

export default MyApp;
