import './App.css'
import Button from './components/Button/Button'



function App() {

  const handleClick = () => alert("Cliqué !");

  return (
    <>
      <Button name="Réserver" action={handleClick} />
    </>

  )
}

export default App
