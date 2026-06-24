import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { type NavLink } from '../../components/Burger/Burger';

export default function Homepage(){
      const menu: NavLink[] = [{
        id:1,label:"Se connecter",url:"/api/auth/login"
      },{
         id:2,label:"Créer une liste", url:"/api/wishlists/users/{userId}"
      },{
        id:3,label:"Mes listes", url:"/api/wishlists/users/{userId}"
      }]
    return (
        <>
            <Header logo={'/src/assets/logo wishmegift.png'} links={menu} />
            <main>
                <h1>Accueil</h1>
            </main>
            <Footer />
        </>
    );
}