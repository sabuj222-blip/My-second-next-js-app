import React from 'react';

const Post = ({post}) => {
    return (
        <div className="border border-gray-400 rounded-4">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;