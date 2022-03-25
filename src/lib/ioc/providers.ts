import { injectable } from 'inversify';

export interface IProvider<T> {
    name: string;
    provide: () => T;
}

@injectable()
export class NameProvider implements IProvider<string> {
    public name: string = 'mango';
    provide() {
        return 'World';
    }
}