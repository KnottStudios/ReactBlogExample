import React from 'react';

export class PostsItem extends React.Component {
    constructor(props){
        super(props);
        this.handleSelectPost = this.handleSelectPost.bind(this); 
    }

    handleSelectPost(){
        if(this.props.post != null){
            this.props.selectPost(this.props.post)
        }
    }

    render(){
        const post = this.props.post;
        return(
            <div className="Post" onClick={this.handleSelectPost}>
                <h4 className="PostHeader">{post.title}</h4>
                <div className="PostBody">{post.body}</div>
                <div>
                    <span className="Leftfoot">{post.id}</span>
                    <span className="Rightfoot">by: {post.userId}</span>
                </div>
            </div>
        );
    }
}