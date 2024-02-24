import './App.css'
import {NavBar} from './components/NavBar'
import { ItemListConatainer } from './components/ItemListContainer'


function App() {
  return(
  <>
    <NavBar/>
    <ItemListConatainer saludar="Hola, como estas? Vienvenido a CANELA la tienda de tu mascota"/>
  </>

  )
}

export default App

