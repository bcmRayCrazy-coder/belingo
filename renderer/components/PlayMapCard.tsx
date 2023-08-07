import React from 'react';
import { PlayListInfo } from '../../share/api';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Chip,
    createStyles,
    makeStyles,
} from '@material-ui/core';
import { Avatar, Typography } from '@mui/material';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import VisibilityIcon from '@material-ui/icons/Visibility';
import HeadphonesIcon from '@material-ui/icons/Headset';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            maxWidth: 256,
            margin: '4px 4px',
        },
        media: {
            height: 256,
            width: 256,
        },
        content: {
            backdropFilter: 'blur(4px)',
            height: '100%',
            transition: 'all .2s ease-in',
            '&:hover': {
                backdropFilter: 'blur(0px)',
            },
        },
        avatar: {
            width: 40,
            height: 40,
            marginLeft: -1,
        },
        chip: {
            marginTop: theme.spacing(2),
        },
        unknownType: {
            backgroundColor: '#b60c0c',
        },
        mapType: {
            backgroundColor: '#efac4d',
        },
        modelType: {
            backgroundColor: '#4def5a',
        },
        musicType: {
            backgroundColor: '#4dddef',
        },
    }),
);

export default function PlayMapCard(props: PlayListInfo) {
    const styles = useStyles();

    return (
        <Card className={styles.root} variant="outlined">
            <CardActionArea>
                <CardMedia
                    className={styles.media}
                    image={
                        'https://static.box3.codemao.cn/img/' +
                        props.image.split('.')[0] +
                        '_256_256_contain.avif'
                    }
                    title={props.name + '的封面'}
                >
                    <CardContent className={styles.content}>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="h1"
                            color="white"
                        >
                            {props.name}
                        </Typography>
                        <Chip
                            icon={
                                <Avatar
                                    alt={props.authorName + '的头像'}
                                    src={
                                        'https://static.box3.codemao.cn/img/' +
                                        props.authorAvatar.split('.')[0] +
                                        '_50_50_cover.avif'
                                    }
                                    className={styles.avatar}
                                />
                            }
                            label={props.authorName}
                        />
                        <br />
                        <Chip
                            variant="outlined"
                            label={['未知', '地图', '模型', '音乐'][props.type]}
                            className={
                                styles.chip +
                                ' ' +
                                ([
                                    styles.unknownType,
                                    styles.mapType,
                                    styles.modelType,
                                    styles.musicType,
                                ][props.type] || styles.unknownType)
                            }
                        />
                        <br />
                        <Chip
                            icon={
                                props.type == 1 ? (
                                    <SportsEsportsIcon />
                                ) : props.type == 2 ? (
                                    <VisibilityIcon />
                                ) : (
                                    <HeadphonesIcon />
                                )
                            }
                            label={
                                props.type == 1
                                    ? props.playCount
                                    : props.viewCount
                            }
                            className={styles.chip}
                            color="primary"
                        />
                    </CardContent>
                </CardMedia>
            </CardActionArea>
        </Card>
    );
}
