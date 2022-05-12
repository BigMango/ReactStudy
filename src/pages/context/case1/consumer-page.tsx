import React, { PureComponent } from 'react';
import { Consumer } from '../contexts/product-context';


class ConsumerPage extends PureComponent {

  render() {
    return (
      <Consumer>
        {context => {
          return (
            <div>
              name:{context.name}
              <br />
              price:{context.price}
              <br />
              unit:{context.unit}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ConsumerPage;