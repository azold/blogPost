import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from "react-redux";

const BlogPost = (props) => {
    const post = findPost(props.match.params.title, props);
    if (!post) {
        return <div>Sorry, but the post was not found</div>
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
            <Link to='/'>Back</Link>
        </div>
    )
};

function findPost(title, props){
    console.log(props.posts);
        for (let i=0; i <  props.posts.length; i++) {
            if ( props.posts[i].title === title) {
                return  props.posts[i];
            }
        }
}
    
function mapStateToProperties(state) {
    return {
        posts: state.posts
    };
}

export const BlogPostContainer = connect(mapStateToProperties)(BlogPost);
