import React, { HTMLAttributes } from 'react';

interface HooksProps extends HTMLAttributes<any> {
  onClick?: () => void;
}

// 普通函数写法,返回类型一般不写
export function HooksChild(hooksProps: HooksProps): JSX.Element {
  // BadCallback 父组件的count变化时，A组件仍旧会不断的re-render
  console.log('case2: render_A');
  return <button onClick={hooksProps.onClick}>A组件+count</button>;
}

// FC 写法
const HooksChildFC: React.FC<HooksProps> = (props) => {
  console.log('case2: render_A');
  return <button onClick={props.onClick}>A组件+count</button>;
};

// FC 写法2
const HooksChildFC2: React.FC<HooksProps> = function (
  props: HooksProps
): JSX.Element {
  console.log('case2: render_A');
  return <button onClick={props.onClick}>A组件+count</button>;
};

// js 写法 onClick 父控件无法感知
export const HooksChildOld = ({ onClick }) => {
  // BadCallback 父组件的count变化时，A组件仍旧会不断的re-render
  console.log('case2: render_A');
  return <button onClick={onClick}>A组件+count</button>;
};

export const MemoChild = React.memo(HooksChild);
