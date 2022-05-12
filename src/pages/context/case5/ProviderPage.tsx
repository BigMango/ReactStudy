import React, { PureComponent } from 'react';
import { MiddlePage } from './MiddlePage';
import { SchoolContext, StudentContext } from './MultiContext';

export class ProviderPage5 extends PureComponent {

  state = {
    school: {
      name: '清华大学',
      location: '北京'
    },
    student: {
      name: '张云',
      age: 22
    }
  };


  render() {
    const { school, student } = this.state;

    return (
      <div>
        <h1>消费多个Context</h1>

        <SchoolContext.Provider value={school}>
          <StudentContext.Provider value={student}>
            <MiddlePage />
          </StudentContext.Provider>
        </SchoolContext.Provider>
      </div>

      // 不用Provider包裹显示Context中定义的默认值
      // <MiddlePage />
    );
  }
}

