import React from 'react';

export class PostsTabs extends React.Component {
    constructor(props){
        super(props);
        this.handleSelectTab = this.handleSelectTab.bind(this);
    }
    handleSelectTab(id){
        var tabcontent = document.getElementsByClassName("tabContent");
        for(var i=0; i<tabcontent.length; i++){
            tabcontent[i].classList.add("is-hidden");
        }
        var linktabs = document.getElementsByClassName("linkTab");
        for(i=0; i<linktabs.length; i++){
            linktabs[i].classList.remove("is-active");
        }
        var linkId = "li" + id.userId;
        var uId = "post" + id.userId;
        document.getElementById(linkId).classList.add("is-active");
        document.getElementById(uId).classList.remove("is-hidden");
    }
    render(){
        const tabs = [];
        console.log("rendering tabs");
        for(var key in this.props.tabs){
            const userId = this.props.tabs[key];
            const linkId = "li" + this.props.tabs[key];
            tabs.push(<li id={linkId} className="linkTab" onClick={()=>this.handleSelectTab({userId})} key={key}><a>ID {userId}</a></li>);
        }
        return (
            <div className="tabs">
                <ul>
                    {tabs}
                </ul>
            </div>
        );
    }
}