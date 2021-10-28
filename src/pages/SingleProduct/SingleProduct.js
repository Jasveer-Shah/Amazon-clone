import React from 'react'
import {useParams} from "react-router-dom";
import {products} from "../../utils/ProductsData";
function SingleProduct() {

    let {id} = useParams();
    let singleProduct = products.find((item) => item.id === id)
    return (
        <div className="single-product-container">
            <img
              className='single-product-ad'
             src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

             <div>
                 <div className="single-product">
                     <img src={singleProduct.image} className="single-product-image" alt="" />
                 </div>
             </div>
        </div>
    )
}

export default SingleProduct
