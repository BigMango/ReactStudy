import React, { PureComponent } from 'react';
import { Button, Divider } from 'antd';
import { Consumer } from './ProductContext';

export class ConsumerPage extends PureComponent {
  render() {
    return (
      <Consumer>
        {/* 创建的Context对象*/}
        {/* ConsumerPage组件不仅从context获取product对象值，还获取1个handlePrice函数*/}
        {/* 注意参数名要和Provider中传入的以及context中定义的一摸一样*/}
        {context => {
          return (
            <div>
              name:{context.product.name}
              <br />
              price:{context.product.price}
              <br />
              unit:{context.product.unit}
              <Divider />
              <Button
                onClick={context.handlePrice}
                type="primary"
              >
                增加
              </Button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
