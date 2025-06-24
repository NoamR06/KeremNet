import React from 'react';
import { Comment } from './Comment';
import "./CommentSection.css";

export interface CommentsSectionProps {
  comments: Comment[];
}

export const CommentsSection: React.FC<CommentsSectionProps> = ({ comments }) => {
  return (
    <div>
              { (!(comments === undefined)) && comments.length > 0 ? (
          comments.map(({author, content, date}) => (
          <div className="comment">
            <p id="post_comment_content"><strong>{author}</strong>: {content}</p>
            <p id="post_comment_date">{date.toLocaleDateString()} at {date.toLocaleTimeString()}</p>
          </div>
        ))
        ) : (
          <p id="post_no_comments">No comments yet.</p>
        )}
    </div>
  )
};