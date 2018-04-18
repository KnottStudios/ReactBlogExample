import React from 'react';
import { GetObjectFromUrl } from './GetObjectFromUrl';

export class SinglePost extends React.Component{
    constructor(props){
        super(props);
        this.state = { body: null, id: null, title: null, userId: null}
        this.setProperties = this.setProperties.bind(this)
    };
    
    setProperties(jObject) {
        console.log("Calling Single post");
        this.setState({
            body: jObject.body,
            id: jObject.id,
            title: jObject.title,
            userId: jObject.userId,
            googly: jObject.what
        });
    };
    render(){
        const url = "https://jsonplaceholder.typicode.com/posts/" + this.props.id;
        var getPost;
        if(this.props.getInfo !== false && this.state.id === null){
            getPost = <GetObjectFromUrl url={url} updateModel={this.setProperties}/>
        }
        return(
            <div className="box">
                {getPost}
                <h5>{this.state.title} : {this.state.id}</h5>
                <p>{this.state.body}</p>
            </div>
        );
    }
}
