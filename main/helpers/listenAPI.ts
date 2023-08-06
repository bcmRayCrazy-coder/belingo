import { ipcMain } from 'electron';
import { IpcRendererApiArgs } from '../../share/ipc/IpcApiArgs';
import { login } from '../api/account';

export default function listenAPI() {
    ipcMain.handle('api', async (event, data: string) => {
        var args: IpcRendererApiArgs = JSON.parse(data);
        if (args.type == 'login') {
            return await login(args.data.account, args.data.password);
        }
    });
}
