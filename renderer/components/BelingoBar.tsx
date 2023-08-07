import {
    AppBar,
    Avatar,
    Menu,
    MenuItem,
    Slide,
    Toolbar,
    Typography,
    createStyles,
    makeStyles,
    useScrollTrigger,
} from '@material-ui/core';
import styles from './BelingoBar.module.css';
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { setStore } from '../lib/store';
import Router from 'next/router';

const useStyles = makeStyles((theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(4),
        },
    }),
);

export default function BelingoBar(props: {
    username: string;
    avatar: string;
}) {
    const trigger = useScrollTrigger();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    function handleMenu(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function handleLogout() {
        handleClose();
        setStore('login', false);
        Router.push('/home');
    }

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={styles.title}>
                        Belingo
                    </Typography>

                    <div>
                        <Button
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            startIcon={
                                <Avatar
                                    alt="头像"
                                    src={props.avatar}
                                    className={styles.avatar}
                                />
                            }
                        >
                            {props.username}
                        </Button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleLogout}>退出登陆</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Slide>
    );
}
