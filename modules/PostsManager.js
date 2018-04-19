import React from 'react';
import { GetObjectFromUrl } from './GetObjectFromUrl';
import { SearchBar2 } from './SearchBar2';
import { Posts } from './Posts';
import { PostsItemEditor } from './PostsItemEditor';

export class PostsManager extends React.Component{
    constructor(props){
        super(props);
        this.state = { openEditor: false, posts: null, filterText: '', selectedPost: '', isLoaded: false};
        this.setProperties = this.setProperties.bind(this);
        this.selectPost = this.selectPost.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    };
    handleFilterTextChange(filterText) {
        this.setState({
          openEditor: false,
          filterText: filterText
        });
      }

    selectPost(post){
        this.setState({ selectedPost: post, openEditor: true });
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
            <div className="box">
                {getAllPosts}
                <SearchBar2 filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange}/>
                <h1 className="title">All Posts By UserId</h1>
                <PostsItemEditor openEditor={this.state.openEditor} post={this.state.selectedPost} updatePost={this.updatePost}/>
                <div>
                
                <Posts posts={this.state.posts} filterText={this.state.filterText} selectPost={this.selectPost}/>
                </div>
                
            </div>
        );
    }
}