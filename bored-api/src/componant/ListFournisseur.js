import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'reactstrap';
import React, { useEffect, useState } from 'react';

import TableFournisseur from './TableFournisseur';



const ListFournisseur=()=>{
            const [fournisseur,setFournisseur]=useState([])
            const [modal ,setModal]=useState(false);
            const toggle = ()=>{setModal(!modal)};

            useEffect(()=>{
            let list=localStorage.getItem("Fournissours");
            if (list){
                setFournisseur(JSON.parse(list))
            }
            },[])

            const saveFournisseurUpdated =()=>{

            }

    

        return (
        <>
            
            <Table hover responsive >
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nom et Prenom</th>
                    <th>telephone</th>
                    <th>email</th>
                    <th>tva</th>
                    <th>commantaire</th>
                    <th>Modifier</th>
                    <th>suprimer</th>
                    </tr>
                </thead>
                <tbody>
                {fournisseur && fournisseur.map((obj, index) =>
                <TableFournisseur toggle={toggle} modal={modal} obj={obj} index={index} /> )}
                    
                    
                </tbody>
            </Table>
            
        </>
        )


}

export default ListFournisseur;

