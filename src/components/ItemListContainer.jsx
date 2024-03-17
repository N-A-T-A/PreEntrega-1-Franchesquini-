// import { useHref } from "react-router-dom";
import { useEffect, useState } from "react";
import productos from "../utils/MockProductosAsync.json";


export const ItemListConatainer = ({saludar},) => {
    console.log("hola")
    
    const[productosCharged,setprductosCharged] = useState([])
    const fakeApiCall = (productos) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            },1000)
        })
    }

    useEffect(() => {
        fakeApiCall(productos).then(resp => setprductosCharged(resp))      
    },[]) 

    // console.log(productos.map(item => item.id));
    
    return (<>
        <div id="saludo">    
            <h2>{saludar}</h2>
        </div>

        
        {
            productos.map((item) => { return<> 
                <div class="card" className="width: 18rem">     
                <img src={item.imagen} class="card-img-top" className="width:auto" alt="..."/>
            
                <div class="card-body">
                    <h5 class="card-title">{item.nombre}</h5>
                    <p class="card-text">{item.descripcion}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </>})
        }   
        
    </>)

}
export default ItemListConatainer
