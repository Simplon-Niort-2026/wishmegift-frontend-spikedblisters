import "./Header.css";
import Burger, { type NavLink } from "../Burger/Burger";

interface HeaderProps {
  logo: string;
  links: NavLink[];
}

export default function Header({ logo, links = [] }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-inner">
        <img src={logo} alt="Logo" className="header-logo" />
        
        

        <nav className="header-nav">
            {links.map((link) => (
                <a key={link.id} href={link.url} className="nav-link">
                     {link.label}
                </a>
            ))}
        </nav>
      </div>
    </header>
  );
}
