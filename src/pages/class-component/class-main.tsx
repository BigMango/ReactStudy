import { Divider } from 'antd';
import React from 'react';
import { LifeCycleContainer } from './life-cycle';

export class ClassComponent extends React.Component {
  render() {
    return (
      <>
        <Divider plain>Life Cycle</Divider>
        <LifeCycleContainer />
      </>
    );
  }
}