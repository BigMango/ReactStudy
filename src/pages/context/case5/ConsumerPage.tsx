import React, { PureComponent } from 'react';
import { SchoolContext, StudentContext } from './MultiContext';

export class ConsumerPage extends PureComponent {

  render() {

    return (
      <SchoolContext.Consumer>
        {school => (
          <StudentContext.Consumer>
            {student => {
              return (
                <div>
                  就读学校: {school.name}
                  <br />
                  学校位置: {school.location}
                  <br />
                  学生姓名: {student.name}
                  <br />
                  学生年龄: {student.age}
                </div>
              );
            }}
          </StudentContext.Consumer>
        )}
      </SchoolContext.Consumer>
    );
  }
}

