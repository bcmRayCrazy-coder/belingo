import { ipcRenderer } from 'electron';
import { LoginBack } from '../../../share/api';

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
