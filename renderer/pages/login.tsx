import React from 'react';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Grid, TextField, styled } from '@mui/material';
import HourglassIcon from '@material-ui/icons/HourglassEmpty';
import styles from './login.module.css';
import { login } from '../lib/api/account';
import { ipcRenderer } from 'electron';
import { LoginBack } from '../../share/api';
import theme from '../lib/theme';

const Root = styled('div')(({ theme }) => {
    return {
        textAlign: 'center',
        paddingTop: theme.spacing(4),
    };
});

function Login() {
    const [isLoggingIn, setLoggingIn] = React.useState(false);
    const [tip, setTip] = React.useState(' ');

    const accountRef = React.useRef<HTMLInputElement>();
    const passwordRef = React.useRef<HTMLInputElement>();

    function handleLoginClick() {
        setLoggingIn(true);
        setTip(' ');
        var account = accountRef.current.value;
        var password = passwordRef.current.value;
        if (!account || !password) {
            setLoggingIn(false);
            setTip('请输入账号密码');
            return;
        }
        login(account, password).then((v: LoginBack) => {
            if (v.error) {
                setLoggingIn(false);
                setTip('账号不存在或密码错误!');
            }
            console.log(v);
        });
    }

    return (
        <React.Fragment>
            <Head>
                <title>登陆 - Belingo</title>
            </Head>
            <Root className={styles.root}>
                <Typography variant="h4" gutterBottom>
                    登陆到box3
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    请使用boxid登陆
                </Typography>
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item className={styles.loginWrapper}>
                        <Card variant="outlined">
                            <CardContent>
                                <form noValidate autoComplete="off">
                                    <Grid
                                        container
                                        spacing={2}
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Grid
                                            item
                                            className={styles.inputWrapper}
                                        >
                                            <TextField
                                                id="outlined-basic"
                                                label="账号"
                                                variant="outlined"
                                                className={styles.input}
                                                inputRef={accountRef}
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            className={styles.inputWrapper}
                                        >
                                            <TextField
                                                id="outlined-basic"
                                                label="密码"
                                                variant="outlined"
                                                type="password"
                                                className={styles.input}
                                                inputRef={passwordRef}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                variant="contained"
                                                color="success"
                                                disabled={isLoggingIn}
                                                onClick={handleLoginClick}
                                                startIcon={
                                                    isLoggingIn ? (
                                                        <HourglassIcon />
                                                    ) : (
                                                        <></>
                                                    )
                                                }
                                            >
                                                登陆
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="caption"
                                                color={
                                                    theme.palette.error.light
                                                }
                                            >
                                                {tip}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Root>
        </React.Fragment>
    );
}

export default Login;
