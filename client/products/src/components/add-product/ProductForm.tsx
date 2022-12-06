import { useState } from 'react';
import './ProductForm.css';
import TypeSwitcher from './TypeSwitcher';
import { Link, useHistory } from 'react-router-dom';

const ProductForm = (props: any) => {
    const history = useHistory();
    const [enteredSku, setEnteredSku] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredType, setEnteredType] = useState('');
    const [enteredWeight, setEnteredWeight] = useState('');
    const [enteredSize, setEnteredSize] = useState('');
    const [enteredHeight, setEnteredHeight] = useState('');
    const [enteredWidth, setEnteredWidth] = useState('');
    const [enteredLength, setEnteredLength] = useState('');

    const skuHandler = (e: any) => {
        setEnteredSku(e.target.value);
    };

    const nameHandler = (e: any) => {
        setEnteredName(e.target.value);
    };

    const priceHandler = (e: any) => {
        setEnteredPrice(e.target.value);
    };

    const typeHandler = (selectedOption: string) => {
        setEnteredType(selectedOption);
    };

    const sizeHandler = (e: any) => {
        setEnteredSize(e.target.value);
    };

    const weightHandler = (e: any) => {
        setEnteredWeight(e.target.value);
    };

    const heightHandler = (e: any) => {
        setEnteredHeight(e.target.value);
    };

    const widthHandler = (e: any) => {
        setEnteredWidth(e.target.value);
    };

    const lengthHandler = (e: any) => {
        setEnteredLength(e.target.value);
    };

    const submitHandler = (event: any) => {
        event.preventDefault();

        if (enteredSku === '' || enteredName === '' || enteredPrice === '' || (enteredSize === '' && enteredWeight === '' && (enteredWidth === '' || enteredHeight === '' || enteredLength === ''))) {
            alert('Please, submit required data');
            return;
        }

        const productData = {
            sku: enteredSku,
            name: enteredName,
            price: enteredPrice,
            type: enteredType,
            size: enteredSize,
            weight: enteredWeight,
            width: enteredWidth,
            height: enteredHeight,
            length: enteredLength
        };

        props.onSaveProductData(productData);

        setEnteredSku('');
        setEnteredName('');
        setEnteredPrice('');
        setEnteredSize('');
        setEnteredWeight('');
        setEnteredWidth('');
        setEnteredLength('');
        setEnteredHeight('');
        setEnteredType('');
        history.push("/products");
    };

    let productDescription = <div></div>;
    if (enteredType === 'book') {
        productDescription =
            <div>
                <label>Weight (KG)</label>
                <input id="weight" type='number' min="0.01" step="0.01" value={enteredWeight} onChange={weightHandler} />
                <br/>
                <p>Please, provide weight</p>
            </div>;
    } else if (enteredType === 'dvd') {
        productDescription =
            <div>
                <label>Size (MB)</label>
                <input id="size" type='number' min="0.01" step="0.01" value={enteredSize} onChange={sizeHandler} />
                <br/>
                <p>Please, provide size</p>
            </div>;
    } else if (enteredType === 'furniture') {
        productDescription =
            <div>
                <label>Height (CM)</label>
                <input id="height" type='number' min="0.01" step="0.01" value={enteredHeight} onChange={heightHandler} />

                <label>Width (CM)</label>
                <input id="width" type='number' min="0.01" step="0.01" value={enteredWidth} onChange={widthHandler} />

                <label>Length (CM)</label>
                <input id="length" type='number' min="0.01" step="0.01" value={enteredLength} onChange={lengthHandler} />
                <br/>
                <p>Please, provide dimensions</p>
            </div>;
    }

    return (
        <form id="product_form" onSubmit={submitHandler}>
            <div className='add-product__controls'>
                <div className='add-product__control'>
                    <label>SKU</label>
                    <input id="sku" type='text' value={enteredSku} onChange={skuHandler} />
                </div>
                <div className='add-product__control'>
                    <label>Name</label>
                    <input id="name" type='text' value={enteredName} onChange={nameHandler} />
                </div>
                <div className='add-product__control'>
                    <label>Price ($)</label>
                    <input id="price" type='number' min="0.01" step="0.01" value={enteredPrice} onChange={priceHandler} />
                </div>
            </div>
            <div className='type-switcher__control'>
                <label>Type Switcher</label>
                <TypeSwitcher type={enteredType} onSwitch={typeHandler} />
                {productDescription}
            </div>
            <div className='add-product__actions'>
                <button type="submit">Save</button>
                <Link to='/products'>
                    <button type="button">Cancel</button>
                </Link>
            </div>
        </form>
    );
};

export default ProductForm;
