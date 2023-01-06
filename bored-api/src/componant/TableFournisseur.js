import {Button} from 'reactstrap';
import UpdateFournisseur from './UpdateFournisseur';







const TableFournisseur=({toggle,index,obj,modal})=>{
    console.log(toggle)
    console.log(modal)
    return(
        <tr>
                    <th>{index}</th>
                    <td>{obj.name}</td>
                    <td>{obj.telephone}</td>
                    <td>{obj.email}</td>
                    <td>{obj.tva}</td>
                    <td>{obj.commantaire}</td>
                    <td><Button color="success" onClick={toggle}>modifier</Button></td>
                    <UpdateFournisseur toggle={toggle} modal={modal} obj={obj} index={index} />
                    
                </tr>
    )
}

export default TableFournisseur;




