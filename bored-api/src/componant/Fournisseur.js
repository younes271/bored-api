import { useState } from "react";
import ListFournisseur from "./ListFournisseur";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


const Fournisseur = ()=>{
 
    
    return (
        <>
        <NavBar   />
        
        <h1> Gestion de fournisseur</h1>
        <ListFournisseur/>

        </>
      
    )
}

export default Fournisseur;



