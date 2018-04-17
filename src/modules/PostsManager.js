import React from 'react';
import { GetObjectFromUrl } from './GetObjectFromUrl';
import { SearchBar } from './SearchBar';
import { Posts } from './Posts';
import { PostsItemEditor } from './PostsItemEditor';

export class PostsManager extends React.Component{
    constructor(props){
        super(props);
        this.state = { posts: null, filterText: '', selectedPost: '', isLoaded: false};
        this.setProperties = this.setProperties.bind(this);
        this.selectPost = this.selectPost.bind(this);
        this.updatePost = this.updatePost.bind(this);
    };

    selectPost(post){
        this.setState({ selectedPost: post });
        console.log("post " + post);
    }
    setProperties(jObject){
        console.log("Calling All posts");
        this.setState({ posts: jObject, isLoaded: true});
    };
    updatePost(updatedPost){
        console.log("updating post");
        if(this.state.posts){
            this.setState({posts: this.state.posts.map(
                (el) => el.id === updatedPost.post.id ? Object.assign({}, el, {title: updatedPost.post.title, body: updatedPost.post.body}) : el 
            )});
        }
    };

    render(){
        const url = "https://jsonplaceholder.typicode.com/posts";
        var getAllPosts;
        if(this.state.isLoaded === false){
            getAllPosts = <GetObjectFromUrl url={url} updateModel={this.setProperties}/>
        }
        return(
            <div>
                {getAllPosts}
                <h1>All Posts</h1>
                <PostsItemEditor post={this.state.selectedPost} updatePost={this.updatePost}/>
                <div>
                <SearchBar filterText={this.state.filterText}/>
                <Posts posts={this.state.posts} filterText={this.state.filterText} selectPost={this.selectPost}/>
                </div>
                
            </div>
        );
    }
}