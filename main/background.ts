import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import { createWindow, listenAPI } from './helpers';
import { store } from './helpers/store';
import { IpcStoreRendererArgs } from '../share/ipc/IpcStoreArgs';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
    serve({ directory: 'app' });
} else {
    app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
    await app.whenReady();

    const mainWindow = createWindow('main', {
        width: 1000,
        height: 600,
    });

    if (isProd) {
        await mainWindow.loadURL('app://./home.html');
    } else {
        const port = process.argv[2];
        await mainWindow.loadURL(`http://localhost:${port}/home`);
        mainWindow.webContents.openDevTools();
    }

    listenAPI();
    ipcMain.handle('store', (event, args: IpcStoreRendererArgs) => {
        if (args.type == 'get') return store.get(args.key);
        return store.set(args.key, args.value);
    });
})();

app.on('window-all-closed', () => {
    app.quit();
});
