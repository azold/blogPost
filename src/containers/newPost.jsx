import React from 'react';
import {connect} from 'react-redux';

import PostActions from './../postActions';

export class NewPost extends React.Component {
    render() {
        return (
            <div>
                Title :<input type="text" value={this.props.newTitle} onChange={this.props.inputTitleChanged}/>
                Text: <input type="text" value={this.props.newText} onChange={this.props.inputTextChanged}/>
                <input type="submit"
                    onClick={e => this.props.newPostSubmitted(this.props.newTitle, this.props.newText)}/>
            </div>
        );
    }
}

function mapStateToProperties(state) {
    return {
        newText: state.newPost.text,
        newTitle: state.newPost.title
    };
}

export const actionCreators = {
    inputTextChanged: (event) => {
        return {type: PostActions.newPostTextChanged, text: event.target.value}
    },
    inputTitleChanged: (event) => {
        return {type: PostActions.newPostTitleChanged, title: event.target.value}
    },
    newPostSubmitted: (title, text) => {
        return {type: PostActions.newPostCreated, title: title, text: text}
    }
};

export const NewPostContainer = connect(mapStateToProperties, actionCreators)(NewPost);