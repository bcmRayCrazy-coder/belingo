import { LoginBack } from '../../api';

export interface LoginRendererArgs {
    type: 'login';
    data: {
        account: string;
        password: string;
    };
}

export interface LoginMainArgs {
    type: 'login';
    data: LoginBack;
}
