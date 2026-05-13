import './App.css'
import Button from './components/Button/Button'
import StarRating from './components/StarRating/StarRating';



function App() {

  const handleClick = () => alert("Cliqué !");

  return (
    <>
      <Button name="Réserver" action={handleClick} />
      <StarRating />
    </>

  )
}

export default App
