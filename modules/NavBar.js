import React from 'react';
import { NavLink } from './NavLink';

export class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { error: null, isLoaded: false, links: [{linkAddress:"https://www.codecademy.com/learn/react-101", linkName:"CodeAcademyReact", target:"_blank"},
            {linkAddress: "https://reactjs.org/tutorial/tutorial.html", linkName:"ReactTutorial", target: "_blank"},
            {linkAddress: "https://jsonplaceholder.typicode.com/", linkName:"TestApi", target: "_blank"},
            {linkAddress: "https://bulma.io/", linkName:"BulmaCSS", target: "_blank"},
            {linkAddress: "http://www.knottstudios.com/", linkName:"KnottStudios", target: "_blank"},]
        }
    }
        
    render() {
        var links = this.state.links.map((link, i) => 
            <NavLink linkAddress={link.linkAddress} linkName={link.linkName} target={link.target} key={i}/>)
        return (
            <div className="navbar is-dark">
                <ul>
                    { links }
                </ul>
            </div>
            

        );
    }
}