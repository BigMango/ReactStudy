import React from 'react';

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 创建1个Context对象
// 注意第1个参数是1个object {}
export const ProductContext = React.createContext({
  product: {
    name: 'car',
    price: 8000,
    unit: '$'
  },

  // 通过context传递1个函数，使得consumer组件更新context
  handlePrice: () => {
  }
}
);


export const { Provider, Consumer } = ProductContext;
