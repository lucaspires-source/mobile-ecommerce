
import logo from "../../assets/logo.png";
import tomato from '../../assets/tomate.png';
import brocolis from '../../assets/brocolis.png';
import potato from '../../assets/batata.png';
import cucumber from '../../assets/pepino.png';
import pumpkin from '../../assets/abobora.png';
const cesta = {
    top: {
        title:"Detalhe de Cesta"
    }, 
    details : {
        name:"Cesta de Verduras",
        farmName:"Jenny Jack Farm",
        farmLogo: logo,
        description:"Uma cesta com produtos selecionados da fazenda direto para sua cozinha",
        price: "R$ 40,00",
        button:"Comprar"
    },
    items: { 
        title: "Itens da cesta", 
        list: [ 
          { 
            name: "Tomate", 
            image: tomato, 
          }, 
          { 
            name: "Brócolis", 
            image: brocolis, 
          }, 
          { 
            name: "Batata", 
            image: potato, 
          }, 
          { 
            name: "Pepino", 
            image: cucumber, 
          }, 
          { 
            name: "Abóbora", 
            image: pumpkin, 
          } 
        ] 
      }
    
    
}


export default cesta