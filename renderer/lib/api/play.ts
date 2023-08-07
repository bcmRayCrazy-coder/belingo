import { ipcRenderer } from 'electron';
import { PlayListBack } from '../../../share/api';

export async function getPlayList(
    limit: number,
    offset: number,
): Promise<PlayListBack> {
    if (!ipcRenderer) return;
    return await ipcRenderer.invoke(
        'api',
        JSON.stringify({
            type: 'playList',
            data: {
                limit,
                offset,
            },
        }),
    );
}
