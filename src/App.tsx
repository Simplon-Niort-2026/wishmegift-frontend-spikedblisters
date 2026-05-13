import './App.css'
import Button from './components/Button/Button'
import Burger, { type NavLink } from './components/Burger/Burger'



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
      
    </>

  )
}

export default App
