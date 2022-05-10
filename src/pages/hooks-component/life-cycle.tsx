import { Divider } from 'antd';
import React, { useState, useEffect, useRef } from 'react';

// construct
function useConstruct(fn) {
  // useState 传入初始化函数 fn 只会执行一次
  useState(fn);
}

// componentDidMount
function useDidMount(fn) {
  // 依赖项给空数组，只会执行一次
  useEffect(fn, []);
}

// componentDidUpdate
function useDidUpdate(fn) {
  // 依赖项不传值，任何触发的 render 都会执行
  useEffect(fn);
}

// componentWillUnmount
function useUnMount(fn) {
  useEffect(() => fn, []);
}

function Block() {
  const [count, setCount] = useState(0);
  const instance = useRef({ name: 'mango' });

  useConstruct(() => {
    instance.current.name = 'orange';
    console.log('Block Component----Construct');
  });

  useDidMount(() => {
    console.log('Block Component----componentDidMount');
  });

  useDidUpdate(() => {
    console.log('instance.current.name', instance.current.name);
    console.log('Block Component----componentDidUpdate');
  });

  useUnMount(() => {
    console.log('Block Component----componentWillUnmount');
  });

  console.log('Block render');
  return (
    <div style={{ backgroundColor: '#eaeaea' }}>
      <p>Block组件</p>
      <p>count: {count}</p>
      <br />
      <button onClick={() => setCount(count + 1)}>点击 count 1</button>
    </div>
  );
}

export default function HooksLifeCycle() {
  const [unMountBlock, setUnMountBlock] = useState(false);
  return (
    <div>
      <Divider plain>Live cycle</Divider>
      <p>unMountBlock: {unMountBlock ? 'true' : 'false'}</p>
      <br />
      {!unMountBlock ? <Block /> : null}
      <br />
      <button onClick={() => setUnMountBlock(true)}>点击卸载 Block 组件</button>
    </div>
  );
}


// import { useState, useEffect, useCallback } from 'react';
// import { HooksChild } from './HookChild';

// export function LifeCycle() {
//   const [count, setCount] = useState(0);

//   // 模拟componentDidMount：
//   useEffect(() => {
//     console.log('首次渲染页面');
//   }, []);

//   const onClick = useCallback(() => {
//     setCount((count) => count + 1);
//   }, []);

//   // 模拟componentDidUpdate：
//   useEffect(() => { console.log('任意属性变更'); });
//   useEffect(() => { console.log('指定元素n变更'); }, n);

//   // 模拟componentWillUnmount：
//   useEffect(() => {
//     console.log('首次渲染');
//     return () => {
//       console.log('即将卸载');
//     };
//   });

//   return (
//     <>
//       <p>count:{count}</p>
//       <HooksChild onClick={onClick} />
//     </>
//   );
// }
