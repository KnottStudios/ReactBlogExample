import React from 'react';
import PropTypes from 'prop-types';

export class GetObjectFromUrl extends React.Component{
    constructor(props){
        super(props);
        this.state = { error: null, isLoaded: false, jobject: "" }
    }
    componentDidMount() {
            console.log("mounted url is " + this.props.url);
            fetch(this.props.url, {
                    method: 'GET',
                }//see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
            )//test is "https://jsonplaceholder.typicode.com/posts/1"
                .then(res => res.json())
                .then(
                    (result) => {//comes back as an object, not json.
                        this.setState({
                            isLoaded: true,
                            jobject: result
                        });
                        this.props.updateModel(this.state.jobject);
                        console.log(this.state.jobject);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log("error ");
                }
            )
    }
    componentWillUnmount() {
        
    };
    render(){
        return(
            null
        );
    }
}

GetObjectFromUrl.propTypes = {
    url: PropTypes.string.isRequired,
    updateModel : PropTypes.func.isRequired
};