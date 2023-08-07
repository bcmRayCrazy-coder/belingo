import { ipcMain } from 'electron';
import { IpcRendererApiArgs } from '../../share/ipc/IpcApiArgs';
import { auth2cookie, fetchAccountInfo, login } from '../api/account';
import { getPlayList } from '../api/play';

export default function listenAPI() {
    ipcMain.handle('api', async (event, message: string) => {
        var args: IpcRendererApiArgs = JSON.parse(message);

        switch (args.type) {
            case 'login':
                return await login(args.data.account, args.data.password);
            case 'auth2cookie':
                return await auth2cookie(args.data.token);
            case 'fetchAccountInfo':
                return await fetchAccountInfo(args.data.id);
            case 'playList':
                return await getPlayList(args.data.limit, args.data.offset, 0);
        }
    });
}
