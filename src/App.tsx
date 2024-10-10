import { useEffect, useState } from "react";
import "./App.css";
import { Gallery, Navbar, Reviews, Services } from "./components";
import {
  InstaIcon,
  MenuIcon,
  TikTokIcon,
  WhatsappIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
} from "./assets";
import { GetQuote } from "./components/getQuote";
import { Footer } from "./components/footer";
import { getReviews, getServices } from "./utils/review";

function App() {
  const [showSidebar, setToggleSidebar] = useState<any>(false);

  // useEffect(()=>{
  //   getServices();
  //   getReviews();
  // }, [])

  return (
    <div className="relative h-dvh w-full md:[h-50vh] md:max-w-50% md:m-auto">
      <div className="overflow-y-hidden overflow-x-hidden relative bg-[url('./assets/bg1.jpg')] bg-center bg-cover bg-fixed bg-gray-800 bg-blend-overlay backdrop-blur-lg">
        <Navbar
          isSidebarVisible={showSidebar}
          setToggleSidebar={setToggleSidebar}
        />
        <Services />
        <Reviews />
        <GetQuote />
        <Footer />
      </div>
      <div
        id="verticalMenu"
        className="fixed w-full top-full -translate-y-full py-2 flex items-center justify-center bg-[rgba(0,0,0,0.4)]"
      >
        <ul className="w-full flex items-center justify-evenly overflow-hidden">
          <li className="h-10 w-16 flex items-center justify-center">
            <a
              href="https://www.tiktok.com/@gold.shine.cleaning"
              target="_blank"
            >
              <TikTokIcon className="h-12 w-12" />
            </a>
          </li>
          <li className="h-10 w-16 flex items-center justify-center">
            <a
              href="https://www.instagram.com/gold_shine_cleaning/"
              target="_blank"
            >
              <InstaIcon className="h-12 w-12" />
            </a>
          </li>
          <li className="h-10 w-16 flex items-center justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=13065806152"
              target="_blank"
            >
              <WhatsappIcon className="h-10 w-10" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
