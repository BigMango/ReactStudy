import React, { PureComponent } from 'react';
import MiddlePage from './middle-page';
import { ProductState, Provider } from '../contexts/product-context';

export class ProviderPage1 extends PureComponent<any, ProductState> {

  state: ProductState = {
    product: {
      name: 'plane',
      price: 120000,
      unit: '$'
    }
  };

  render() {
    const { product } = this.state;

    return (
      <div>
        <h1>根组件使用Provider传值，子组件使用Consumer接收</h1>

        <Provider value={product}>
          <MiddlePage />
        </Provider>
        {/* 不用Provider，显示Context对象defaultValue*/}
        {/*   <MiddlePage />*/}
      </div>
    );
  }
}