import { ipcRenderer } from 'electron';

export function setStore(key: string, value: unknown) {
    ipcRenderer.invoke('store', {
        type: 'set',
        key,
        value,
    });
}

export async function getStore<T>(key: string): Promise<T> {
    return await ipcRenderer.invoke('store', {
        type: 'get',
        key,
    });
}
