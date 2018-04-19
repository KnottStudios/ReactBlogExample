import React from 'react';

export class SearchBarDeprecated extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render(){
        return(
            <div className="Search">
                <form>
                    <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                    />
                </form>
            </div>
        );
    }
}