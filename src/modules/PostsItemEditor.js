import React from 'react';

export class PostsItemEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {post: null, open: false};
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(!nextProps.openEditor){
            this.setState({open: false});
        }
        else if(!this.state.post){
            this.setState({post : nextProps.post, open: true}) 
        }
        else if (nextProps.post.id !== this.state.post.id || this.state.open === false){
            this.setState({post : nextProps.post, open: true})
        }
    }
    handleClose(){
        this.setState({ open: false});
    }
    
    handleUpdate(){
        this.props.updatePost(this.state); 

        /*Here, we could also call our ajax to update this record in the db.*/
    }
    handleTitleChange(event) {
        var titleText = event.target.value;
        this.setState(prevState => ({
            post: {
                ...prevState.post,
                title: titleText,
            }
        }))
    }
    handleBodyChange(event) {
        var bodyText = event.target.value;
        this.setState(prevState => ({
            post: {
                ...prevState.post,
                body: bodyText,
            }
        }))
    }

    render(){
        if(!this.props.post || !this.state.open){
            return null
        }
        const post = this.props.post;

        return(
            <div className="PostDetail">
                
                <h4 className="PostHeader"><input className="HeaderTextBox" type="text" value={this.state.post.title} onChange={this.handleTitleChange}></input></h4>
                <div className="PostDetailBody"><textarea className="BodyTextArea" value={this.state.post.body} onChange={this.handleBodyChange}></textarea></div>
                <div>
                    <span className="Leftfoot">{post.id}</span>
                    <input className="Button" type="button" onClick={this.handleUpdate} value="save"/>
                    <input className="Button" type="button" onClick={this.handleClose} value="close"/>
                    <span className="Rightfoot">by: {post.userId}</span>
                </div>
            </div>
        );
    }
}