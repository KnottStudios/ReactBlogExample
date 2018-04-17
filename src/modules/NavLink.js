import React from 'react';

export class NavLink extends React.Component {
    render() {
        return (
            <li><a href={this.props.linkAddress} target={this.props.target}><div>{this.props.linkName}</div></a></li>
        );
    }
}