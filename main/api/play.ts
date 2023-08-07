import { PlayListBack } from '../../share/api';
import { service } from './service';

export async function getPlayList(
    limit: number,
    offset: number,
    type: number,
): Promise<PlayListBack> {
    return (
        await service.get(
            `https://backend.box3.fun/content/homepage/recommend/list?limit=${limit}&offset=${offset}&type=${type}&childSuitable=false`,
        )
    ).data.data;
}
