import React from 'react'
import {useSelector} from 'react-redux'

import Post from '../Post/Post'
import useStyles from './PostContainerStyle'

const PostContainer = () => {
    const posts = useSelector((state)=>state.posts);
    const classes = useStyles();
    console.log(posts);
    
    return (
        <div>
            PostContainer
            <Post/>
            <Post/>
        </div>
    )
}

export default PostContainer
