// import './App.css'
import { BannerListMobile } from './components/BannerListMobile/BannerListMobile';
import Button from './components/Button/Button'
import Burger, { type NavLink } from './components/Burger/Burger'
import StarRating from './components/StarRating/StarRating';
import { TitleCardWishlistMobile } from './components/TitleCardWishlistMobile/TitleCardWishlistMobile';




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
    <header>
      <Burger links={menu}></Burger>
    </header>
    
      <Button name="Réserver" action={handleClick} />

      <BannerListMobile title="Mes listes" date="13/05/2026" />
      <TitleCardWishlistMobile title='Titre de la liste'/>
      <StarRating />

    </>

  )
}

export default App
