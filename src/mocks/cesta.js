
import logo from "../../assets/logo.png";

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
    itens: { 
        titulo: "Itens da cesta", 
        lista: [ 
          { 
            nome: "Tomate", 
            imagem: tomate, 
          }, 
          { 
            nome: "Brócolis", 
            imagem: brocolis, 
          }, 
          { 
            nome: "Batata", 
            imagem: batata, 
          }, 
          { 
            nome: "Pepino", 
            imagem: pepino, 
          }, 
          { 
            nome: "Abóbora", 
            imagem: abobora, 
          } 
        ] 
      }
    
    
}


export default cesta