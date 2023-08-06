import { Auth2CookieBack } from '../../api';

export interface Auth2CookieRendererArgs {
    type: 'auth2cookie';
    data: {
        token: string;
    };
}

export interface Auth2CookieMainArgs {
    type: 'auth2cookie';
    data: Auth2CookieBack;
}
