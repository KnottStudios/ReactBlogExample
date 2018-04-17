import React from 'react';

export class SearchBar extends React.Component {
    render(){
        const filterText = this.props.filterText;

        return(
            <form>
                <input type="text" placeholder="Search..." value={filterText} />
            </form>
        );
    }
}