import { Divider } from 'antd';
import React from 'react';
import { ForwardRefMain } from './Forwarding';
import { BadCallback, GoodCallback } from './UseCallback';
import { BadMemo, GoodMemo } from './UseMemo';
import HooksLifeCycle from './life-cycle';
export function Hooks() {
  return (
    <>
      <HooksLifeCycle />
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
