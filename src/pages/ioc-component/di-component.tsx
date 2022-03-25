import { inject, injectable } from 'inversify';
import React from 'react';
import { lazyInject } from '../../lib/ioc/ioc';
import { useInjection } from '../../lib/ioc/ioc.react';
import { IProvider, NameProvider } from '../../lib/ioc/providers';

export const HooksDI: React.FC = () => {
  const provider = useInjection<IProvider<string>>(NameProvider);
  const provider2 = useInjection<NameProvider>('nameProvider');
  const provider3 = useInjection(NameProvider);

  return <h1>HooksDI {provider.provide()}!</h1>;
};

@injectable()
export class ComponentDI extends React.Component {
  constructor(
    props,
    @inject('nameProvider') private nameProvider3: NameProvider
  ) {
    super(props);
    // console.log(this.nameProvider.provide());
  }
  @lazyInject(NameProvider) public nameProvider: NameProvider;
  @inject('nameProvider')
  private readonly nameProvider1: IProvider<string>;
  @inject(NameProvider) nameProvider2: NameProvider;
  render() {
    return <h1>ComponentDI {this.nameProvider?.provide()}!</h1>;
  }
}

export const InjectDemo: React.FC = () => {
  return (
    <div>
      <HooksDI />
      <ComponentDI />
    </div>
  );
};
