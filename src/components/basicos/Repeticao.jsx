import React from "react";

import products from "../../data/products";

export default props => {

    function getProductsListItem() {
        return products.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.name} - {prod.price}
                </li>
        })
    }

    return (
        <div>
            <h2>Repeticao</h2>
            <ul>
                {getProductsListItem()}
            </ul>
        </div>
    )
}