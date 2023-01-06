import { useEffect, useState } from "react";
import {Label,FormGroup,ModalBody,ModalHeader,Button,ModalFooter,Modal} from 'reactstrap';




const UpdateFournisseur=({toggle,modal,obj ,index})=>{
    const [namePrenom ,setNamePrenom] = useState('');
    const [telephone,setTelephone]=useState('');
    const [email,setEmail]=useState('');
    const [tva,setTva]=useState('');
    const [commantaire,setCommantaire]=useState('');
    console.log("objjjj",obj)
    console.log("index",index)




    useEffect(()=>{
        setNamePrenom(obj.name);
        setTelephone(obj.telephone);
        setEmail(obj.email);
        setTva(obj.tva);
        setCommantaire(obj.tva);
    },[])
    

    const handleChange = (e)=>{
        
        const {name,value}=e.target;
        if(name === "name"){
            setNamePrenom(value);
        }else if(name==="telephone"){
            setTelephone(value);

        }else if(name==="email"){
            setEmail(value);

        }else if(name==="tva"){
            setTva(value);

        }else if(name==="commantaire"){
            setCommantaire(value);

        }
    }


    return (
        <>
        <Modal isOpen={modal} toggle={toggle}  >
            
                <ModalHeader toggle={toggle}>Modifier un fournisseur</ModalHeader>
                <ModalBody>
                    <FormGroup>
                    <Label for="exampleAddress">
                                Nom et Prenom
                    </Label>
                    <input type="text" className='form-control' name='name' value={namePrenom} onChange={handleChange}   />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleAddress">
                                numero de telephone
                    </Label>
                    <input type="text" className='form-control' name="telephone" value={telephone}  onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleAddress">
                                Adress email
                    </Label>
                    <input type="text" className='form-control' name="email" value={email}  onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleAddress">
                                N de TVA
                    </Label>
                    <input type="text" className='form-control' name="tva" value={tva}  onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleAddress">
                               Commantaire
                    </Label>
                    <input type="text" className='form-control' name="commantaire" value={commantaire}  onChange={handleChange} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" >
                    Modifier
                </Button>{' '}
                <Button color="secondary" >
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
        </>
    )



}




export default UpdateFournisseur;

