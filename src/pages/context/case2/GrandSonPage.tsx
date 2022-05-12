/* eslint-disable react/sort-comp */
import React, { PureComponent } from 'react';

import { FamilyContext } from './FamilyContext';


class GrandSonPage extends PureComponent {

  static contextType = FamilyContext;

  componentDidMount() {
    // 使用contexType可以在任意生命周期访问数据
    // 使用 this.context 来消费最近 Context 上的那个值
    const value = this.context;
    console.log(value);
  }

  render() {
    // Context是1个对象，对对象进行解构操作
    const { name, age, gender } = this.context;

    return (
      <div>
        name:{name}
        <br />
        age:{age}
        <br />
        gender:{gender}
      </div>
    );
  }
}

export default GrandSonPage;