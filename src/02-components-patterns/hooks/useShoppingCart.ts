import { useState } from 'react';

import { Product, ProductInCart } from '../interfaces/interfaces';

interface b {
  product: Product;
  count: number;
}

export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onCountChange = ({ product, count }: b) => {

    setShoppingCart(oldShoppingCart => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return {
          ...oldShoppingCart,
          [product.id]: productInCart
        };
      }

      const newShoppingCart = { ...oldShoppingCart };
      delete newShoppingCart[product.id];
      
      return newShoppingCart;

      /* if (count === 0) {
        const newShoppingCart = { ...oldShoppingCart };
        delete newShoppingCart[product.id];
        return newShoppingCart;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count }
      }; */
    });

  };

  /* const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    const newShoppingCart = { ...shoppingCart };
    (count === 0) ? delete newShoppingCart[product.id] : newShoppingCart[product.id] = { ...product, count };
    setShoppingCart(newShoppingCart);
  } */

  return { shoppingCart, onCountChange };
  
};
