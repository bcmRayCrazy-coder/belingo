import { ipcRenderer } from 'electron';

export function setStore(key: string, value: unknown) {
    if (!ipcRenderer) return;
    ipcRenderer.invoke('store', {
        type: 'set',
        key,
        value,
    });
}

export async function getStore<T>(key: string): Promise<T> {
    if (!ipcRenderer) return;
    return await ipcRenderer.invoke('store', {
        type: 'get',
        key,
    });
}
