import React from 'react';

export class NavLink extends React.Component {
    render() {
        return (
            <li className="navbar-item"><a className="navbar-link a" href={this.props.linkAddress} target={this.props.target}><div>{this.props.linkName}</div></a></li>
        );
    }
}