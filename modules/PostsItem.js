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
        var body = "";
        if(post.body.length > 75){
            body = post.body.substr(0, 72) + '...';
        }else {
            body= post.body.substr(0, 75);
        }
        return(
            <div className="Post content" onClick={this.handleSelectPost}>
                <h4 className="h4 PostHeader">{post.title}</h4>
                <div className="PostBody">{body}</div>
                <div className="">
                    <span className="Leftfoot is-size-7">{post.id}</span>
                    <span className="Rightfoot is-size-7">by: {post.userId}</span>
                </div>
            </div>
        );
    }
}