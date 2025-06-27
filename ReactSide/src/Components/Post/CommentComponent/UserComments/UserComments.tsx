import React from 'react';
import { Comment } from '../Comment';
import "./UserComments.css";

export interface UserCommentsProps {
  post_comments: Comment[];
}

export const UserComments: React.FC<UserCommentsProps> = ({ post_comments }) => {
  return (
    <div>
              { (!(post_comments === undefined)) && post_comments.length > 0 ? (
          post_comments.map(({author, content, date}) => (
          <div className="comment">
            <p id="post_comment_content"><strong>{author}</strong>: {content}</p>
            <p id="post_comment_date">{new Date(date).toLocaleDateString()} at {new Date(date).toLocaleTimeString()}</p>
          </div>
        ))
        ) : (
          <p id="post_no_comments">No comments yet.</p>
        )}
    </div>
  )
};