import React from 'react'
import Post from '../Post/Post'
import useStyles from './PostContainerStyle'

const PostContainer = () => {
    const classes = useStyles();
    return (
        <div>
            PostContainer
            <Post/>
            <Post/>
        </div>
    )
}

export default PostContainer
