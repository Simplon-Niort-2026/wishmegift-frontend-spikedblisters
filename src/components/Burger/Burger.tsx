import NavLink from "../NavLink/NavLink";
import "./Burger.css";
import { pushRotate as Menu } from "react-burger-menu";
import type { NavLink as NavLinkType } from "../NavLinkTypes";

interface BurgerProps {
  links: NavLinkType[];
}
export default function Burger(props: BurgerProps) {
  return (
    <Menu right isOpen={false} width={"300px"}>
      {props.links.map((link) => (
        <NavLink
          key={link.id}
          id={link.id}
          label={link.label}
          url={link.url}
          variant="burger"
        ></NavLink>
      ))}
    </Menu>
  );
}
