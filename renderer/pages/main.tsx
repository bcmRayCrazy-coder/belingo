import React from 'react';
import { AccountInfo, PlayListInfo } from '../../share/api';
import { getStore } from '../lib/store';
import Head from 'next/head';
import { styled } from '@mui/material';
import BelingoBar from '../components/BelingoBar';
import { getPlayList } from '../lib/api/play';
import PlayMapCard from '../components/PlayMapCard';
import { Grid, makeStyles } from '@material-ui/core';

const Root = styled('div')(({ theme }) => {
    return {
        textAlign: 'center',
        paddingTop: theme.spacing(2),

        overflow: 'hidden',
    };
});

export default function MainPage() {
    const [username, setUsername] = React.useState('获取中');
    const [avatarUrl, setAvatar] = React.useState('');
    const [playList, setPlayList] = React.useState<PlayListInfo[]>([]);

    async function getAccountInfo(): Promise<AccountInfo> {
        return JSON.parse(await getStore('account.info'));
    }

    async function fetchPlayList() {
        var list = (await getPlayList(30, 0)).rows;
        setPlayList(list);
    }

    React.useEffect(() => {
        getAccountInfo().then((info) => {
            setUsername(info.displayname);
            setAvatar(info.avatar);
        });
        fetchPlayList();
    });

    return (
        <React.Fragment>
            <Head>
                <title>Belingo</title>
            </Head>
            <BelingoBar username={username} avatar={avatarUrl} />
            <Root>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    {playList.map((props) => (
                        <PlayMapCard {...props} />
                    ))}
                </Grid>
            </Root>
        </React.Fragment>
    );
}
