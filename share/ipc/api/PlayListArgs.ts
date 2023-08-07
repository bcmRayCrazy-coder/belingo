import { PlayListBack } from '../../api';

export interface PlayListRendererArgs {
    type: 'playList';
    data: {
        limit: number;
        offset: number;
    };
}

export interface PlayListMainArgs {
    type: 'playList';
    data: PlayListBack;
}
