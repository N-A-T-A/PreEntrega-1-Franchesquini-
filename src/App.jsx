import './App.css'
import {NavBar} from './components/NavBar'
import { ItemListConatainer } from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return(
  <>
    <NavBar/>
    <ItemListConatainer saludar="Hola, como estas? Vienvenido a CANELA la tienda de tu mascota"/> 
    {/* <BrowserRouter>
      
      <Routes>
        <Route exact path="/"/>
        <Route exact path="/"/>
        <Route exact path="/"/>
      </Routes>
    </BrowserRouter> */}
    
  </>

  )
}

export default App

