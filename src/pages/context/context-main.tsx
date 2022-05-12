import { Divider } from 'antd';
import React from 'react';
import { ProviderPage1 } from './case1/provider-page';
import { FatherPage } from './case2/FatherPage';
import { ProviderPage3 } from './case3/ProviderPage';
import { ProviderPage4 } from './case4/ProviderPage';
import { ProviderPage5 } from './case5/ProviderPage';

export class ContextMain extends React.Component {
  render() {
    return (
      <>
        <Divider plain>Case1 使用Provider和Consumer生产和消费数据</Divider>
        <ProviderPage1 />
        <Divider plain>Case2 使用ContextType接收数据</Divider>
        <FatherPage />
        <Divider plain>Case3 动态和静态Context</Divider>
        <ProviderPage3 />
        <Divider plain>Case4 在嵌套组件中更新Context</Divider>
        <ProviderPage4 />
        <Divider plain>Case5 消费多个Context</Divider>
        <ProviderPage5 />
      </>
    );
  }
}