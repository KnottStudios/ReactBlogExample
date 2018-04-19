import React from 'react';

export class SearchBar2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { timeout: null}; 
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    handleFilterTextChange(e) {
        const self = this;
        const newText = e.target.value;
        clearTimeout(this.state.timeout); //may set state directly... oops. but this works, dangit!
        this.setState({ timeout: setTimeout(function() {self.props.onFilterTextChange(newText)}, 1000)});
    }


    render(){
        return(
            <div className="Search">
                <form>
                    <input
                    type="text"
                    placeholder="Search..."
                    onChange={this.handleFilterTextChange}
                    />
                </form>
            </div>
        );
    }
}