import { CSSProperties, createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { InitialValues, OnChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

  const { counter, maxCount, isMaxCountReached, increaseBy, reset } = useProduct({ product, onChange, value, initialValues });

  return (
    <Provider value={{ product, counter, maxCount, increaseBy }}>
      <div className={ `${ styles.productCard } ${ className }` } style={ style }>
        { 
          children({
            count: counter,
            maxCount: initialValues?.maxCount,
            isMaxCountReached,
            product,
            increaseBy,
            reset
          })
        }
      </div>
    </Provider>
  )

};
