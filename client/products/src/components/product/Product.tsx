import './Product.css';
import Card from '../UI/Card';
import { useState } from 'react';

const Product = (props: any) => {

    const onChangeHandler = (e: any) => {
        if (e.target.checked) {
            props.onCheckboxChecked(props.sku)
        } else {
            props.onCheckboxUnchecked(props.sku);
        }
    }

    let productDescription = '';
    if (props.type === 'dvd') {
        productDescription = 'size: ' + props.size + ' MB';
    } else if (props.type === 'book') {
        productDescription = 'weight: ' + props.weight;
    } else if (props.type === 'furniture') {
        productDescription = 'dimensions: ' + props.height + 'x' + props.width + 'x' + props.length;
    }

    return (
        <Card className='product'>
            <div className='product__description'>
                <input type='checkbox' className='delete-checkbox' onChange={onChangeHandler} />
                <h2>{props.sku}</h2>
                <h2>{props.name}</h2>
                <h2 className='product__price'>{props.price} $</h2>
                <h2>{productDescription}</h2>
            </div>
        </Card>
    );
}

export default Product;
