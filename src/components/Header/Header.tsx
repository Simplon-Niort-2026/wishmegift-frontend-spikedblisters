import "./Header.css";
import NavLink from "../NavLink/NavLink";
import type { NavLink as NavLinkType } from "../NavLinkTypes";

interface HeaderProps {
  logo: string;
  links: NavLinkType[];
}

export default function Header({ logo, links = [] }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-inner">
        <img src={logo} alt="Logo" className="header-logo" />

        <nav className="header-nav">
          {links.map((link) => (
            <NavLink
              key={link.id}
              id={link.id}
              label={link.label}
              url={link.url}
              variant="header"
            ></NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
