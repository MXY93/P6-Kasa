import kasa from "../assets/kasalogo.svg";

export default function Footer() {
    return (
    <footer className="footer">
        <img src={kasa} alt="logo Kasa" className="footer__logo"/>
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
    );
} 