import React, { PureComponent } from 'react';
import { MiddlePage } from './MiddlePage';
import { Provider } from './ProductContext';
export class ProviderPage4 extends PureComponent {

  state = {
    product: {
      name: 'plane',
      price: 120000,
      unit: '$'
    },
    // state页包含了更新函数，因此会被传递进context provider
    handlePrice: () => this.handlePrice()
  };

  handlePrice = () => {
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
    const { product, handlePrice } = this.state;

    return (
      <div>
        <h1>子组件通过context传递的函数更新context，等于在子组件中更新状态</h1>
        {/* 注意此时传递进去的是state，包含product对象和1个函数*/}
        <Provider value={{ product, handlePrice }}>
          <MiddlePage />
        </Provider>
        {/* 不用Provider，显示Context对象defaultValue*/}
        {/*   <MiddlePage />*/}
      </div>
    );
  }
}


