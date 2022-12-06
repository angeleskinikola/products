import Card from "../UI/Card";
import Product from './Product';
import './Products.css';

const Products = (props: any) => {

    return (
        <Card className='products'>
            {props.products.map((product: any) =>
                <Product
                    key={product.sku}
                    sku={product.sku}
                    name={product.name}
                    price={product.price}
                    type={product.type}
                    weight={product.weight}
                    width={product.width}
                    height={product.height}
                    length={product.length}
                    size={product.size}
                    onCheckboxChecked={props.onCheckboxChecked}
                    onCheckboxUnchecked={props.onCheckboxUnchecked}/>)}
        </Card>
    )
}

export default Products;
