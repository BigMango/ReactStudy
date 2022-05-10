/* eslint-disable react/sort-comp */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable react/no-string-refs */
/* eslint-disable react/no-unsafe */
/* eslint-disable react/no-deprecated */

// https://www.jianshu.com/p/4784216b8194/

import React from 'react';

interface LifeCycleProp {
  num: number;
}

interface LifeCycleState {
  str: string;
}


/* eslint-disable radix */
class LifeCycle extends React.Component<LifeCycleProp, LifeCycleState> {
  constructor(props: LifeCycleProp) {
    super(props);
    console.log('Initial render');
    console.log('constructor');
    this.state = { str: 'hello' };
  }

  static getDerivedStateFromProps(props: LifeCycleProp, state: LifeCycleState) {
    // getDerivedStateFromProps 的存在只有一个目的：让组件在 props 变化时更新 state。
    console.warn('getDerivedStateFromProps');
    return { str: state.str + String(props.num) };
  }

  getSnapshotBeforeUpdate(prevProps: LifeCycleProp, prevState: LifeCycleState) {
    console.log('#enter getSnapshotBeforeUpdate');
    return 'foo';
  }

  componentDidUpdate(prevProps: LifeCycleProp, prevState: LifeCycleState, snapshot: any) {
    console.log('#enter componentDidUpdate snapshot = ', snapshot);
  }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  componentWillMount() {
    console.warn('React 16.3 + 废弃 componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;        // 记得要返回true
  }


  // #region 16.3及其以上要废弃的
  componentWillReceiveProps(nextProps) {
    console.warn('React 16.3+ 废弃 componentWillReceiveProps');
  }


  componentWillUpdate() {
    console.warn('React 16.3+ componentWillUpdate');
  }

  UNSAFE_componentWillMount() {
    console.warn('React 16.3+ UNSAFE_componentWillMount');
  }

  UNSAFE_componentWillUpdate(nextProps: Readonly<LifeCycleProp>, nextState: Readonly<LifeCycleState>, nextContext: any): void {
    console.warn('React 16.3+ UNSAFE_componentWillUpdate');
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.warn('React 16.3+ UNSAFE_componentWillReceiveProps');
  }

  // #endregion 16.3及其以上要废弃的




  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  setTheState() {
    let str = 'hello';
    if (this.state.str === str) {
      str = 'HELLO';
    }
    this.setState({
      str
    });
  }

  forceItUpdate() {
    this.forceUpdate();
  }

  render() {
    console.log('render');
    return (
      <div>
        <span>Props:<h2>{this.props.num}</h2></span>
        <br />
        <span>State:<h2>{this.state.str}</h2></span>
      </div>
    );
  }
}


interface ContainerState {
  num: number;
}

export class LifeCycleContainer extends React.Component<any, ContainerState> {
  constructor(props) {
    super(props);
    this.state = {
      num: Math.random() * 100
    };
  }

  propsChange() {
    this.setState({
      num: Math.random() * 100
    });
  }

  // setLifeCycleState() {
  //   this.refs.rLifeCycle.setTheState();
  // }

  // forceLifeCycleUpdate() {
  //   this.refs.rLifeCycle.forceItUpdate();
  // }

  unmountLifeCycle() {
    // 这里卸载父组件也会导致卸载子组件
    // React.unmountComponentAtNode(document.getElementById('container'));
  }

  parentForceUpdate() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.propsChange.bind(this)}>propsChange</a>
        {/* <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.setLifeCycleState.bind(this)}>setState</a>
        <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.forceLifeCycleUpdate.bind(this)}>forceUpdate</a> */}
        <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.unmountLifeCycle.bind(this)}>unmount</a>
        <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.parentForceUpdate.bind(this)}>parentForceUpdateWithoutChange</a>
        <LifeCycle ref="rLifeCycle" num={this.state.num} />
      </div>
    );
  }
}
