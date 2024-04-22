import React from "react";
import { useContextGlobal } from "./utils/global.context";
import '../styles/footer.css';

const Footer = () => {
  const { state } = useContextGlobal();
  return (
    <footer className="footer">
      <section className={`footer-by-${state.theme} footer-by`}>
        <p>Made with</p>
        <p>Margarita Plazas</p>
      </section>
      <section className="footer-socials">
        <img src="/assets/DH.png" alt="DH-logo" width={300}/>
        <ul className="socials">
          <li>
            <img src="/assets/facebook.svg" alt="icon-facebook" />
          </li>
          <li>
            <img src="/assets/instagram.svg" alt="icon-instagram" />
          </li>
          <li>
            <img src="/assets/whatsapp.svg" alt="icon-whatsapp" />
          </li>
          <li>
            <img
              id="tiktok"
              src="/assets/tiktok.svg"
              alt="icon-tiktok"
              width={30}
            />
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
