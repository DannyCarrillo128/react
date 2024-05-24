import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Store</h1>
      <hr/>
      <ProductCard
          key={ product.id }
          product={ product }
          className="bg-dark text-white"
          initialValues={{ count: 4, maxCount: 10 }}>
        {
          ({ count, maxCount, isMaxCountReached, increaseBy, reset }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-button" />

              <button onClick={ reset }>Reset</button>
              <button onClick={ () => increaseBy(-2) } >-2</button>
              {
                (!isMaxCountReached && <button onClick={ () => increaseBy(2) }>+2</button>)
              }
              {/* <button onClick={ () => increaseBy(2) } disabled={ isMaxCountReached }>+2</button> */}
              <span>Count: { count } - { maxCount }</span>
            </>
          )
        }
      </ProductCard>
    </div>
  )

};
