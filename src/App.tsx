import './App.css'
import { BannerListMobile } from './components/BannerListMobile/BannerListMobile';
import Button from './components/Button/Button'
import StarRating from './components/StarRating/StarRating';



function App() {

  const handleClick = () => alert("Cliqué !");

  return (
    <>
      <Button name="Réserver" action={handleClick} />
      <BannerListMobile title="Mes listes" date="13/05/2026" />
      <StarRating />
    </>

  )
}

export default App
