import type { NavLink } from "../components/NavLinkTypes";

export const handleClick = () => alert("Cliqué !");

export const menu: NavLink[] = [
  {
    id: 1,
    label: "Se connecter",
    url: "/api/auth/login",
  },
  {
    id: 2,
    label: "Créer une liste",
    url: "/api/wishlists/users/{userId}",
  },
  {
    id: 3,
    label: "Mes listes",
    url: "/api/wishlists/users/{userId}",
  },
];