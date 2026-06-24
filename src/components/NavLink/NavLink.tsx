import type { NavLink as NavLinkType } from "../NavLinkTypes";
import "./NavLink.css";

interface NavLinkProps extends NavLinkType {
  variant?: "header" | "burger";
}

export default function NavLink(props: NavLinkProps) {
  const variantClass = props.variant || "header";

  return (
    <>
      <a key={props.id} className={`link ${variantClass}`} href={props.url}>
        {props.label}
      </a>
    </>
  );
}
