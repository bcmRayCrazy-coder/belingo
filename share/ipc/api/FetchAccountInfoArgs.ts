import { FetchAccountInfoBack } from '../../api';

export interface FetchAccountInfoRendererArgs {
    type: 'fetchAccountInfo';
    data: {
        id: string;
    };
}
export interface FetchAccountInfoMainArgs {
    type: 'fetchAccountInfo';
    data: FetchAccountInfoBack;
}
