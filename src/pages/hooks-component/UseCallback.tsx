import React, { useCallback, useState } from 'react';
import { HooksChild } from './HookChild';

export function BadCallback() {
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <>
      <p>count:{count}</p>
      <HooksChild onClick={onClick} />
    </>
  );
}

const MemoChild = React.memo(HooksChild);
export function GoodCallback() {
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <>
      <p>count:{count}</p>
      <MemoChild onClick={onClick} />
    </>
  );
}
