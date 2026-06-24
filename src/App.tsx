// import './App.css'
import { BannerListMobile } from './components/BannerListMobile/BannerListMobile';
import Button from './components/Button/Button'
import Burger, { type NavLink } from './components/Burger/Burger'
import StarRating from './components/StarRating/StarRating';
import GiftCard from './components/GiftCard/GiftCard';
import { TitleCardWishlistMobile } from './components/TitleCardWishlistMobile/TitleCardWishlistMobile';
import { BannerListDetailMobile } from './components/BannerListDetailMobile/BannerListDetailMobile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WishListCardMobile from "./components/WishListCardMobile/WishListCardMobile.tsx";






function App() {

  const handleClick = () => alert("Cliqué !");
  const menu: NavLink[] = [{
    id:1,label:"Se connecter",url:"/api/auth/login"
  },{
     id:2,label:"Créer une liste", url:"/api/wishlists/users/{userId}"
  },{
    id:3,label:"Mes listes", url:"/api/wishlists/users/{userId}"
  }]

  return (

      <>
      
          <Burger links={menu} />
        
          
          <Header logo={'/src/assets/logo wishmegift.png'} links={menu}>

          </Header>

          <Button name="Réserver" action={handleClick}/>

          <BannerListMobile title="Mes listes" date="13/05/2026"/>
          <TitleCardWishlistMobile title='Titre de la liste'/>
          <StarRating/>

          <GiftCard name='fourchette' description='lorem' link='https://fr.wikipedia.org/wiki/Fourchette'
                    price={79.99}/>

          <BannerListDetailMobile title="Mes listes"/>
          <BannerListDetailMobile title="Mes listes Archivées"/>


          <WishListCardMobile title={"Titre de la liste"} author={"Auteur"} description={"Description de la liste"}
                              linkDetails={"Voir détail"} deleteButton={"X"}/>

          <Footer/>
      </>
  )
}

export default App
