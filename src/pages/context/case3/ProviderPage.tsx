import React, { PureComponent } from 'react';
import { Button, Divider } from 'antd';
import { MiddlePage } from './MiddlePage';

import { ProductState, Provider } from '../contexts/product-context';


export class ProviderPage3 extends PureComponent<any, ProductState> {

  state: ProductState = {
    product: {
      name: 'plane',
      price: 120000,
      unit: '$'
    }
  };

  handleChange = () => {
    const { product: { name, price, unit } } = this.state;

    this.setState({
      product: {
        name,
        price: price + 1,
        unit
      }
    });
  };


  render() {
    const { product } = this.state;

    return (
      <div>
        <h1>父组件更新Context，被Provider包裹的子组件刷新值，没被包裹的子组件使用Context默认值</h1>
        {/* 在Provider包裹的内部组件使用state中的值*/}
        <Provider value={product}>
          <MiddlePage />
        </Provider>
        <Divider />
        {/* 不在Provider包裹的外部组件使用ProductContext重的默认值*/}
        <MiddlePage />
        <Divider />
        <Button
          onClick={this.handleChange}
          type="primary"
        >
          增加
        </Button>
      </div>
      // {不用Provider，显示Context对象defaultValue
      // <MiddlePage />
    );
  }
}
