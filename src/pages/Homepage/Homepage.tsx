import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Burger from "../../components/Burger/Burger";
import { menu } from "../../Services/NavLinkService";


export default function Homepage(){
    return (
        <>
            <Burger links={menu} />
            <Header logo={"/src/assets/logo wishmegift.png"} links={menu}></Header>
            <main>
                <h1>Accueil</h1>
            </main>
            <Footer />
        </>
    );
}