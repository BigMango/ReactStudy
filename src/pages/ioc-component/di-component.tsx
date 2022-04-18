import { UsersService } from '@lib/ioc/user-service';
import React from 'react';
import { lazyInject } from '../../lib/ioc/ioc';
import { useInjection } from '../../lib/ioc/ioc.react';
import { IProvider, NameProvider } from '../../lib/ioc/providers';

export const HooksDI: React.FC = () => {
    const nameProvider = useInjection<IProvider<string>>(NameProvider);
    const nameProvider2 = useInjection<NameProvider>('nameProvider');
    const nameProvider3 = useInjection(NameProvider);

    return (
        <>
            <h1>HooksDI</h1>
            <h2>HooksDI {nameProvider.provide()}!</h2>
            <h2>HooksDI {nameProvider2?.provide()}!</h2>
            <h2>HooksDI {nameProvider3?.provide()}!</h2>
        </>
    );
};

// @injectable()
export class ComponentDI extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.usersService);
    }

    //#region Ok
    @lazyInject(NameProvider) public nameProvider: NameProvider;
    // @lazyInject(interfaces.Newable<IProvider<string>>) public nameProvider2;
    // @lazyInject(NameProvider) public nameProvider3 = useInjection<NameProvider>('nameProvider');

    @lazyInject(UsersService) usersService: UsersService;
    //#endregion

    // @inject(UsersService) usersServiceOk: UsersService;

    // @lazyInject(TYPES.UsersService) usersServiceOk2?: UsersService;


    // @inject('nameProvider')
    // private readonly nameProvider1: IProvider<string>;
    // @inject(NameProvider) nameProvider2: NameProvider;
    render() {
        // return <h1>ComponentDI</h1>;
        return (
            <>
                <h1>Component DI</h1>
                <h1>ComponentDI {this.nameProvider?.provide()}!</h1>
                <h1>ComponentDI {this.usersService?.http.port}!</h1>
            </>
        );
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
