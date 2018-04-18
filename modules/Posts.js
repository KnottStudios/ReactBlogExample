import React from 'react';
import { PostsItem } from './PostsItem';
import { PostsHeader } from './PostsHeader';

export class Posts extends React.Component {
    constructor(props){
        super(props);
        this.selectPost = this.selectPost.bind(this); 
        this.handleSelectTab = this.handleSelectTab.bind(this);
    }
    selectPost(post){        
        this.props.selectPost(post);
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
        var linkId = "li" + id.uId;
        document.getElementById(linkId).classList.add("is-active");
        document.getElementById(id.uId).classList.remove("is-hidden");
    }

    render(){
        const panels = [];
        const tabs = [];
        let userIds = [];
        const posts = this.props.posts;
        for(var key in posts){
            var post = posts[key];
            if(!userIds.includes(post.userId)){
                userIds.push(post.userId);
            }
        }
        var masterKey = 0;
        /*May need better logic this does a lot of iterations, but works*/
        for(var userKey in userIds){
            var user = userIds[userKey]
            const headRow = []
            headRow.push(<PostsHeader userId={user} key= {masterKey}  />)
            masterKey += 1;
            var headerKey = masterKey;
            const subrows = [];
            for(key in posts){
                post = posts[key];
                if(post.title.indexOf(this.props.filterText) === -1  && post.body.indexOf(this.props.filterText) === -1){
                    continue;
                }

                if(post.userId === user){
                    subrows.push(<PostsItem post={post} key={masterKey} selectPost={this.selectPost}/>)
                    masterKey += 1;
                }
            }
            if(headerKey === masterKey){
                masterKey -= 1;
            } else {
                const uId = user;
                const linkId = "li" + user;
                tabs.push(<li id={linkId} className="linkTab" onClick={()=>this.handleSelectTab({uId})} key={user}><a>ID {user}</a></li>);
                panels.push(<div id={uId} className="tabContent is-hidden" key={user}>{headRow}<div className="box">{subrows}</div></div>)
            }
        }
        
        return(
            <div>
                <div className="tabs">
                <ul>
                {tabs}
                </ul>
                </div>
                {panels}
            </div>
        );
    }
}