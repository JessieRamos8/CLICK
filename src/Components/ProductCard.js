import React from 'react';
import ProductPropertyTag from './ProductPropertyTag';
import QuantitySelectPanel from './QuantitySelectPanel';
import '../Styles/Components/ProductCard.scss';

// images
import microsoft from '../assets/images/365.png';
import autocad from '../assets/images/Autocad.jpg';
import vmware from '../assets/images/Vmware.jpg';
import azure from '../assets/images/Azure.png';
import skype from '../assets/images/Skype.jpeg';

const ProductCard = ({
    data = {
        productName: 'Nombre del producto',
        description: 'Descripción del producto',
        producer: 'Fabricante',
        productId: 'Id del artículo',
        productPrice: 'Precio del producto',
    },
    setShoppingCart,
    shoppingCart,
}) => {

    const product = data;
    const producerName = product["Fabricante"];

    let isAzure = product['Nombre del Producto'].indexOf('Azure') !== -1;
    let isSkype = product['Nombre del Producto'].indexOf('Skype') !== -1;

    let msImage = isAzure ? azure : isSkype ? skype : microsoft;
        
            
    return (
        <div className='product-card-container'>
            <div className='product-img-info-container'>
                <div className='product-logo-container'>
                    <img 
                        className='product-logo' 
                        src={producerName === 'Microsoft' ? msImage : producerName === 'Autodesk' ? autocad : vmware} 
                        alt={'brand-logo'} 
                    />
                </div>
                <div className='product-info-container'>
                    <h2 className='product-name'>{product["Nombre del Producto"]}</h2>
                    <div className='product-characteristics-container'>
                        <ProductPropertyTag title={'Descripción:'} data={product["Descripción"]} />
                        <ProductPropertyTag title={'Fabricante:'} data={product["Fabricante"]} />
                        <ProductPropertyTag title={'Artículo Id:'} data={product["Id del Articulo"]} />
                        <ProductPropertyTag title={'Precio:'} data={product["Precio del producto"]} />
                    </div>
                </div>
            </div>
            <QuantitySelectPanel 
                shoppingCart={shoppingCart} 
                setShoppingCart={setShoppingCart} 
                price={product["Precio del producto"]}
            />
        </div>
    );
}

export default ProductCard;
