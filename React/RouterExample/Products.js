import React from "react"
import productsData from "./productsData"
function Products() {   
    const productsDetails =  productsData.map(product=>

    ( <div><h1>{product.name}</h1>
        <p>price ${product.price}</p>
        <p>price ${product.description}</p></div>))
    return (
        <div><h1>Products Page</h1>
         {productsDetails}
         </div>
    )
}

export default Products