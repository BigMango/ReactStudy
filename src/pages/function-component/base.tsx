import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FCProps {}

export function FC0() {
  return <div>无脑写法</div>;
}

// 普通函数写法,返回类型一般不写
export function FC1(hooksProps: FCProps): JSX.Element {
  return <div>基础写法</div>;
}

// FC 写法
const FC2: React.FC<FCProps> = (props: FCProps) => {
  return <div>返回FC的写法</div>;
};

// FC 写法2
const FC3: React.FC<FCProps> = function (props: FCProps): JSX.Element {
  return <div>返回函数的写法</div>;
};
