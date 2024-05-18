import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();
  let pageClass = "";

  if (location.pathname === "/about") {
    pageClass = "about-page";
} else if (location.pathname === "/") {
    pageClass = "home-page";
} else if (location.pathname.startsWith("/property/")) {
    pageClass = "home-page";
} else {
    pageClass = "error-page";
}

  return (
    <div className={`wrapper ${pageClass}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}