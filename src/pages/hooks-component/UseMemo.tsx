import React, { useCallback, useState } from 'react';
import { MemoChild } from './HookChild';

export function BadMemo() {
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    console.log(count + 1); // 此处的count一直都是0
  }, []);

  return (
    <>
      <p>count:{count}</p>
      <MemoChild onClick={onClick} />
    </>
  );
}

export function GoodMemo() {
  const [count, setCount] = useState(0);
  const onChange = (data) => {
    setCount(data.target.value);
  };
  const onClick = useCallback(() => {
    console.log(Number(count) + 1);
  }, [count]);

  return (
    <>
      <p>count:{count}</p>
      <input value={count} onChange={onChange} />
      <MemoChild onClick={onClick} />
    </>
  );
}
