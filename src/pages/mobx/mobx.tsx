import { Observer, observer, useLocalObservable, Provider } from 'mobx-react';
import React from 'react';
import { store } from './store';
import './style.css';

export class MobxMain extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <DemoHooks />
                    <DemoFunction />
                    <DemoClass />
                </div>
            </Provider>
        );
    }
}


const DemoFunction: React.FC = () => {
    // const localStore = useLocalObservable(() => ({
    //     count: 1,
    //     // eslint-disable-next-line no-return-assign
    //     addCount: () => (localStore.count += 1)
    // }));

    const localStore = useLocalObservable(() => store);

    return (
        <div>
            <div className='text'>Function</div>
            <button type='button' onClick={localStore.addCount}>Add</button>
            <button type='button' onClick={localStore.decCount}>Dec</button>
            <Observer>{() => <span>{localStore.count}</span>}</Observer>
        </div>
    );
};


function DemoHooks() {
    const localStore = useLocalObservable(() => store);
    return (
        <div>
            <div className='text'>Hooks</div>
            <button type='button' onClick={localStore.addCount}>Add</button>
            <button type='button' onClick={localStore.decCount}>Dec</button>
            <Observer>{() => <span>{localStore.count}</span>}</Observer>
        </div>);
}

@observer
class DemoClass extends React.Component {
    localStore = store;
    public render(): JSX.Element {
        return (
            <>
                <div className='text'>Class</div>
                <button type='button' onClick={this.localStore.addCount}>Add</button>
                <button type='button' onClick={this.localStore.decCount}>Dec</button>
                <Observer>{() => <span>{this.localStore.count}</span>}</Observer>
            </>);
    }
}