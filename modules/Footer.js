import React from 'react';

export class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = { error: null, isLoaded: false, links: [{linkAddress:"https://www.codecademy.com/learn/react-101", linkName:"CodeAcademyReact", target:"_blank"},
            {linkAddress: "https://reactjs.org/tutorial/tutorial.html", linkName:"ReactTutorial", target: "_blank"},
            {linkAddress: "https://jsonplaceholder.typicode.com/", linkName:"TestApi", target: "_blank"},
            {linkAddress: "https://www.lularoe.com/", linkName:"CourtesyOfLulaRoe", target: "_blank"},]
        }
    }
        
    render() {
        var d = new Date();
        var copyright = d.getFullYear() + " KnottStudios";
        return (
            <footer className="Clear Foot">
                <div className="Leftfoot">
                    <a className="Copyright" href='#root'>&copy;{copyright}</a>
                </div>
                <div className="Rightfoot">
                    <span>by: Patrick Knott</span>
                </div>
            </footer>
            

        );
    }
}