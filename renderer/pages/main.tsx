import React from 'react';
import { AccountInfo } from '../../share/api';
import { getStore } from '../lib/store';
import Head from 'next/head';
import { styled } from '@mui/material';
import BelingoBar from '../components/BelingoBar';

const Root = styled('div')(({ theme }) => {
    return {
        textAlign: 'center',
        paddingTop: theme.spacing(2),
    };
});

export default function MainPage() {
    const [username, setUsername] = React.useState('获取中');
    const [avatarUrl, setAvatar] = React.useState('');

    async function getAccountInfo(): Promise<AccountInfo> {
        return JSON.parse(await getStore('account.info'));
    }

    React.useEffect(() => {
        getAccountInfo().then((info) => {
            setUsername(info.displayname);
            setAvatar(info.avatar);
        });
    });

    return (
        <React.Fragment>
            <Head>
                <title>Belingo</title>
            </Head>
            <BelingoBar username={username} avatar={avatarUrl} />
            <Root></Root>
        </React.Fragment>
    );
}
