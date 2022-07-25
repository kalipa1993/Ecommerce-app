import React,{useState,useEffect} from "react";
import ItemDetail from "../ItemDetail";

const producto = {
    "idLoja":1,
    "departamento": "PERECIVEIS", 
    "categoria": "FRIOS",
    "subCategoria": "APRESUNTADO",
    "marca": "SADIA",
    "unidade": "KG",
    "volume": "1KG",
    "codigoBarra": "7891231231231",
    "nome": "APRESENTURADO SADIA 1KG",
    "valor": 19.99,
    "valorPromocao": 14.99,
    "valorAtacado": 0,
    "valorCompra": 0,
    "quantidadeEstoqueAtual": 5.492, 
    "quantidadeEstoqueMinimo": 0,
    "quantidadeAtacado": 0,
    "descricao": "APRESENTURADO SADIA 1KG",
    "ativo": true,
    "plu": "101010",
    "validadeProxima": false,
    "imageURL": "https://site.com/imagem.jpg"
  };

export const ItemDetailContainer =() => {
     const [data,setData] = useState({});

     useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(producto);
            }, 3000);
            });
       
            getData.then(res => setData(res));
        },[])
     

    return (
        <ItemDetail data= {data}/>
    );
}

export default ItemDetailContainer;