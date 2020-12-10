import React, {useEffect} from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import {useDispatch} from 'react-redux'

import {getPosts} from './actions/posts'
import cubic from './images/cubic.png'
import PostContainer from './componets/PostContainer/PostContainer'
import Form from './componets/Form/Form'
import useStyles from './styles'

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.AppBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    <img className={classes.image} src={cubic} alt="memories" width="60" height="60"/>
                    <span></span>Memory Board
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <PostContainer/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
