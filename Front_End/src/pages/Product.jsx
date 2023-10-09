import React from 'react';
import ProductDatas from '../Datas/ProductDatas';

const Product = () => {

    function Productdata(data) {
        return  <div>
        <div className="cardProduct mx-1 my-3">
            <img src={data.imgUrl} />
            <div className="card__content ">
                <p className="card__title">{data.CardTitle}</p>
               <p className="card__description">Rs.123</p>
                <p className="card__description">Qty 45</p>
                <p className="card__description">{data.CardDescription}</p>
            </div>
        </div>
    </div>
        
    }
 
    return (
        <div>
        <h1>Products</h1> <hr />
       <div style={{display:"flex", flexWrap:"wrap"}} className='ProductLists' >
         { ProductDatas.map(Productdata) }
       </div>
       </div>
    );
};

export default Product;