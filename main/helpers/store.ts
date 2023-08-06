import Store from 'electron-store';

const store = new Store<StoreType>({
    defaults: {
        login: false,
        account: {
            info: '',
            token: '',
            name: '',
        },
    },
});

export type StoreType = {
    login: boolean;
    account: {
        info: string;
        token: string;
        name: string;
    };
};

export { store };
