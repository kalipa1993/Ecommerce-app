import React,{useEffect,useState}from "react";
import Title from "../Title";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";

const productos =[
    {
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
      
    },

    {
        "idLoja":2,
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
      }
    
];
   

export const ItemListContainer = ({ texto }) => {

	const [data, setData] = useState([]);


	useEffect =

		(() => {

			const getData = new Promise((resolve) => {

				setTimeout(() => {

					resolve(productos);

				}, 3000);


				getData.then((res) => setData(res));

			});

		},

		[]);




	return (

		<>

			<Title />

			<ItemCount initial={1} stock={5} onAdd={onAdd} />

			<ItemList data={data} />

		</>

	);

};


export default ItemListContainer;