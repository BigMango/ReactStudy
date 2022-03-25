import { Container } from 'inversify';
import { IProvider, NameProvider } from './providers';
import getDecorators from 'inversify-inject-decorators';
export const container = new Container();
container.bind<IProvider<string>>('nameProvider').to(NameProvider);
container.bind<NameProvider>(NameProvider).toSelf();
export const { lazyInject } = getDecorators(container);
