import React from 'react';

export function PostsHeader(props){ 
    return (
        <div>
            <h2 className="Clear subtitle">UserId {props.userId}'s Posts</h2>
        </div>
    );
}