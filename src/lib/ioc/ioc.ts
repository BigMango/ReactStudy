import { Container } from 'inversify';
import { IProvider, NameProvider } from './providers';
import getDecorators from 'inversify-inject-decorators';
import { UsersService } from './user-service';
import { HttpClient } from './http-client';
export const container = new Container();
container.bind<IProvider<string>>('nameProvider').to(NameProvider);
container.bind<NameProvider>(NameProvider).toSelf();
container.bind<UsersService>(UsersService).toSelf();
container.bind<HttpClient>(HttpClient).toSelf();

export const { lazyInject } = getDecorators(container);
