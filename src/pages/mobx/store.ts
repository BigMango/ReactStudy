import { makeObservable, observable, action, runInAction } from 'mobx';

class Store {
    constructor() {
        // mobx6.0后的版本都需要手动调用makeObservable(this)，不然会发现数据变了视图不更新
        makeObservable(this);
    }
    @observable
    count = 1;

    @action
    addCount = () => {
        runInAction(() => {
            this.count++;
        });
    };

    @action
    decCount = () => {
        runInAction(() => {
            if (this.count > 0) {
                this.count--;
            }
        });
    };
}
export const store = new Store();