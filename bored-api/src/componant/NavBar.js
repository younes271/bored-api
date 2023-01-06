import  { useEffect, useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,Button} from 'reactstrap';
import AddFournisseur from './AddFournisseur';


const NavBar=() =>{
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [modal ,setModal]=useState(false);
  const toggle = ()=>{setModal(!modal)};
  const [fournisseur,setFournisseur]=useState([])

  useEffect(()=>{
    let list=localStorage.getItem("Fournissours");
    if (list){
      setFournisseur(JSON.parse(list))
    }
  },[])

  const addFournisseur=(obj)=>{
     
      let listFournisseur = fournisseur;
      listFournisseur.push(obj);

      localStorage.setItem('Fournissours',JSON.stringify(listFournisseur));
      setFournisseur(listFournisseur);
      
      window.location.reload();  
  }
  
 

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          Gestion de Stock
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
            <Button onClick={()=>{setModal(true)}}>Ajouter</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <AddFournisseur  toggle={toggle} modal={modal} addFournisseur={addFournisseur} />
      

    </div>
  );
}

export default NavBar;
