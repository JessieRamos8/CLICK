import { useEffect } from 'react';
import { useState } from 'react';
import Header from './Components/Header';
import ProductCard from './Components/ProductCard';
import SelectFilter from './Components/SelectFilter';
import products from './data/Listado de Productos.json';
import './Styles/App.scss';

function App() {

  const [ shoppingCart, setShoppingCart ] = useState(0);
  const [ searchCondition, setSearchCondition ] = useState(null);
  const [ producerSelected, setProducerSelected ] = useState(null);
  const [ productsFiltered, setProductsFiltered ] = useState(null);
  
  const productsList = products;
  let currentProducts = productsFiltered != null ? productsFiltered : productsList;
  let finalMessage = currentProducts.length >= 1 ? 'Fin de la lista' : 'No se ha encontrado ninguna coincidencia';

  const showAllProducs = () => {
    setProductsFiltered(null);
  }

  const filterProducts = () => {
    const condition = searchCondition.toLowerCase();
    let productsFiltered2 = (
      products.filter(product => product['Nombre del Producto'].toLowerCase().indexOf(condition) !== -1)
    )
    setProductsFiltered(productsFiltered2);
  }

  useEffect(() => {
    if (producerSelected === 'all producers') setProductsFiltered(null);
    else if (producerSelected !== null || producerSelected !== 0) {
      const newProductsList = products.filter(product => product['Fabricante'] === producerSelected);
      setProductsFiltered(newProductsList)
    }
  }, [producerSelected])


  return (
    <div className="App">
      <Header 
        filterFunction={filterProducts} 
        shoppingCart={shoppingCart} 
        setSearchCondition={setSearchCondition}
        showAllFunction={showAllProducs}
      />
      <main>
        <div className='main-top-container'>
          <div className='main-title-container'>
            <h2>Suscripciones</h2>
            <p>Precios más IVA.</p>
          </div>
          <SelectFilter setProducerSelected={setProducerSelected} />
        </div>
        <div className='products-list-container'>
          {
            currentProducts &&
            currentProducts.map((product) =>
              <ProductCard 
                setShoppingCart={setShoppingCart}
                shoppingCart={shoppingCart}
                data={product}
              />
            )
          }
        </div>
        <div className='end-list-container'>
          {finalMessage}
        </div>
      </main>
    </div>
  );
}

export default App;
