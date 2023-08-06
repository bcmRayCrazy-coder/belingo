import React from 'react';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import { Button, styled } from '@mui/material';
import SendIcon from '@material-ui/icons/Send';
import styles from './home.module.css';

const Root = styled('div')(({ theme }) => {
    return {
        textAlign: 'center',
        paddingTop: theme.spacing(4),
    };
});

function Home() {
    return (
        <React.Fragment>
            <Head>
                <title>欢迎 - Belingo</title>
            </Head>
            <Root>
                <Typography variant="h4" gutterBottom>
                    欢迎来到Belingo
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Belingo是一个代码岛三客户端, 有可高度扩展的插件系统
                </Typography>
                <img src="/images/logo.png" className={styles.logo} />
                <br />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SendIcon />}
                    href="/login"
                >
                    现在登陆并开始!
                </Button>
            </Root>
        </React.Fragment>
    );
}

export default Home;
