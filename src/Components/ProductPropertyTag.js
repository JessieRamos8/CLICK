import React from 'react';
import '../Styles/Components/ProductCard.scss';

const ProductPropertyTag = ({title, data}) => {

    return (
        <div className='product-property-container'>
            <p className='property-name'>{title}</p><p className='data'>{data}</p>
        </div>
    );
}

export default ProductPropertyTag;

