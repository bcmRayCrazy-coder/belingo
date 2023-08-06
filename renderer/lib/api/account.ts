import { ipcRenderer } from 'electron';
import {
    Auth2CookieBack,
    FetchAccountInfoBack,
    LoginBack,
} from '../../../share/api';

export async function login(
    account: string,
    password: string,
): Promise<LoginBack> {
    if (!ipcRenderer) return;
    return await ipcRenderer.invoke(
        'api',
        JSON.stringify({
            type: 'login',
            data: {
                account,
                password,
            },
        }),
    );
}

export async function auth2cookie(token: string): Promise<Auth2CookieBack> {
    if (!ipcRenderer) return;
    return await ipcRenderer.invoke(
        'api',
        JSON.stringify({
            type: 'auth2cookie',
            data: {
                token,
            },
        }),
    );
}

export async function fetchAccountInfo(
    id: string,
): Promise<FetchAccountInfoBack> {
    if (!ipcRenderer) return;
    return await ipcRenderer.invoke(
        'api',
        JSON.stringify({
            type: 'fetchAccountInfo',
            data: {
                id,
            },
        }),
    );
}
