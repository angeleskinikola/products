import './AddProduct.css';
import ProductForm from './ProductForm';

const AddProduct = (props: any) => {

    const saveProductDataHandler = (enteredProductData: any) => {
        const product = {
            sku: enteredProductData.sku,
            name: enteredProductData.name,
            price: enteredProductData.price,
            type: enteredProductData.type,
            size: enteredProductData.size !== '' ? enteredProductData.size : null,
            weight: enteredProductData.weight !== '' ? enteredProductData.weight : null,
            height: enteredProductData.height !== '' ? enteredProductData.height : null,
            width: enteredProductData.width !== '' ? enteredProductData.width : null,
            length: enteredProductData.length !== '' ? enteredProductData.length : null
        }
        props.postProduct(product);
    };

    return (
        <div className='save-product'>
            <ProductForm onSaveProductData={saveProductDataHandler} />
        </div>
    );
}

export default AddProduct;
