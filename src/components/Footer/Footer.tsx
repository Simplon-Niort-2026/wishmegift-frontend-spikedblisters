import "./Footer.css"
import Logo from "../../assets/logo.png"

export default function Footer() {

    return (
        <> 
            <footer>
                <a href="" className="left">Mentions légales</a> 
                <a href=""> <img src={Logo}/></a>
                <a href="" className="right">Nous contacter</a>
            </footer>
        </>
    )
    // les liens seront à ajouter une fois les pages faites
}