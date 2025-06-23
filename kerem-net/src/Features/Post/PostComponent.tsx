import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './PostComponent.css';

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: Date;
}

export interface Post {
  id: string;
  author: string;
  content: string;
  date: Date;
  likes: number;
  comments: Comment[];
}

export const PostComponent: React.FC<{ post: Post }> = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = (comment: Comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="post">
      <p id="post_author">{post.author}</p>
      <p id="post_content">{post.content}</p>
      <p id="post_release_date">{post.date.toLocaleDateString()}</p>
      <button id="post_like_button" onClick={handleLike}>Like ({likes})</button>
      <div className="comments">
        <h2>Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p id="post_comment_content"><strong>{comment.author}</strong>: {comment.content}</p>
            <p id="post_comment_date">{comment.date.toLocaleDateString()}</p>
          </div>
        ))}
        <input type="text" id="post_add_comment_name" placeholder="User name" />
        <input type="text" id="post_add_comment_content" placeholder="Comment content" />
        <button id="post_add_comment_button" onClick={() => handleAddComment({
          id: uuidv4(),
          author: (document.getElementById("post_add_comment_name") as HTMLInputElement)?.value || "Anonymous",
          content: (document.getElementById("post_add_comment_content") as HTMLInputElement)?.value || "No content",
          date: new Date(),
        })}>
          Add Comment
        </button>
      </div>
    </div>

  )
}