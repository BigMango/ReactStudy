import { Divider } from 'antd';
import React from 'react';
import { ForwardRefMain } from './Forwarding';
import { BadCallback, GoodCallback } from './UseCallback';
import { BadMemo, GoodMemo } from './UseMemo';
export function Hooks() {
  return (
    <>
      <Divider plain>Call Back</Divider>
      <div>
        <BadCallback />
        <GoodCallback />
      </div>
      <Divider plain>Memo</Divider>
      <div>
        <BadMemo />
        <GoodMemo />
      </div>
      <Divider plain>ForwardRef</Divider>
      <ForwardRefMain />
    </>
  );
}
