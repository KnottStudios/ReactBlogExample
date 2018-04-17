import React from 'react';
import { PostsItem } from './PostsItem';
import { PostsHeader } from './PostsHeader';

export class Posts extends React.Component {
    constructor(props){
        super(props);
        this.selectPost = this.selectPost.bind(this); 
    }
    selectPost(post){        
        this.props.selectPost(post);
    }

    render(){
        const rows = [];
        let userIds = [];
        const posts = this.props.posts;
        for(var key in posts){
            var post = posts[key];
            if(!userIds.includes(post.userId)){
                userIds.push(post.userId);
            }
        }
        var masterKey = 0 
        /*May need better logic this does a lot of iterations, but works*/
        for(var userKey in userIds){
            var user = userIds[userKey]
            rows.push(<PostsHeader userId={user} key= {masterKey}  />)
            masterKey += 1;
            for(key in posts){
                post = posts[key];
                if(post.userId === user){
                    rows.push(<PostsItem post={post} key={masterKey} selectPost={this.selectPost}/>)
                    masterKey += 1;
                }
            }
        }
        
        return(
            <div>
                {rows}
            </div>
        );
    }
}