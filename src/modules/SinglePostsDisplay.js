import React from 'react';
import { SinglePost } from './SinglePost';

export class SinglePostsDisplay extends React.Component {
    render(){
        var ids = [];
        var i;
        for(i = 1; i < 3; i++){
            ids.push(i)
        }
        var blogs = ids.map(function(id, index){
            return <div key={ index }><SinglePost id={id}/></div>;
          })
        return (
            <div>
                <h1>Single Blogs</h1>
                {blogs}
            </div>
        )
    };

}