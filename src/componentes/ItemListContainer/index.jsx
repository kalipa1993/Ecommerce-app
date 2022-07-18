import React from "react";
import Title from "../Title";
import ItemCount from "../ItemCount";
const ItemListContainer = () => {
    const onAdd =(quantity) => {
        console.log(`compraste $ {qauntity} unidades`);
    }
    return(
        <>
       <Title/>
       <ItemCount initial ={1} stock = {5} onAdd={onAdd}/>
       </>
    );
}
 export default ItemListContainer;