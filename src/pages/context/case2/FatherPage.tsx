import React, { PureComponent } from 'react';
import SonPage from './SonPage';

import { Provider } from './FamilyContext';


export class FatherPage extends PureComponent {

  state = {
    person: {
      name: 'Lora',
      age: 99,
      gender: 'female'
    }
  };


  render() {
    const { person } = this.state;

    return (
      <div>
        <h1>使用ContextType消费Context数据</h1>

        <Provider value={person}>
          <SonPage />
        </Provider>

        {/* 不用Provider，显示Context对象defaultValue*/}
        {/* <SonPage />*/}
      </div>
    );
  }
}
