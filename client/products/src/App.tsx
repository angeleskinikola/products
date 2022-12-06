import Products from './components/product/Products';
import AddProduct from './components/add-product/AddProduct';
import { useState, useEffect, useCallback } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [skusToDelete, setSkusToDelete] = useState([]);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/products');
      if (!response.ok) {
        throw new Error(response.status + ' ' + response.statusText);
      }
      const data = await response.json();

      setProducts(data);
    } catch (error: any) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  async function saveProductHandler(product: any) {
    console.log({ products: JSON.stringify(product) })
    await fetch('/products', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    fetchProducts();
  }

  async function deleteProductsHandler() {
    if (skusToDelete.length > 0) {
      await fetch('/products', {
        method: 'DELETE',
        body: JSON.stringify(skusToDelete),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      fetchProducts();
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const checkboxCheckedHandler = (sku: number) => {
    setSkusToDelete((prevState: any) => {
      prevState.push(sku);
      return prevState;
    });
  };

  const checkboxUncheckedHandler = (sku: number) => {
    setSkusToDelete((prevState: any) => {
      return prevState.filter((e: any) => e !== sku);
    });
  };

  const massDeleteHandler = () => {
    deleteProductsHandler();
    setSkusToDelete([]);
  };

  const emptyOutSkusToDelete = () => {
    setSkusToDelete([]);
  }

  let content = <h1>Found no products!</h1>

  if (products.length > 0) {
    content = <Products
        products={products}
        onCheckboxChecked={checkboxCheckedHandler}
        onCheckboxUnchecked={checkboxUncheckedHandler} />
  }

  if (error) {
    content = <h1>{error}</h1>
  }

  if (isLoading) {
    content = <h1>Loading...</h1>
  }

  return (
      <div>
        <Switch>
          <Route path='/add-product'>
            <AddProduct postProduct={saveProductHandler} />
          </Route>
          <Route path="/products">
            <div className='title'>
              <h1>Product List</h1>
              <button id='delete-product-btn' onClick={massDeleteHandler}>MASS DELETE</button>
              <Link to='/add-product'>
                <button id='add-product-btn' onClick={emptyOutSkusToDelete}>ADD</button>
              </Link>
              <hr></hr>
            </div>
            <div>
              {content}
            </div>
          </Route>
          <Route path="/">
            <Redirect to="/products" />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
