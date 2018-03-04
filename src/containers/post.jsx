import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

export class AllPosts extends React.Component {
 render() {
        return (
            <ul>
                {this.props.posts.map(this.renderPost.bind(this))}
            </ul>
        );
    }
 renderPost(postData) {
        console.log(postData)
        return (
            <li>
                <Link to={'/post/' +postData.title}>{postData.title}</Link>
            </li>
        );
    }
}

function mapStateToProperties(state) {
    return {
        posts: state.posts
    };
}

export const AllPostsContainer  = connect(mapStateToProperties)(AllPosts);