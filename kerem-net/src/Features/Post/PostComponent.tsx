import React, { useState } from "react";
import { Comment } from "./CommentComponent/Comment";
import './PostComponent.css';
import { CommentsSection } from "./CommentComponent/CommentsSection/CommentsSection";
import { LikeComponent } from "./LikeComponent/LikeComponent";

export interface PostComponentProps {
  id: string;
  author: string;
  content: string;
  date: Date;
  post_likes: number;
  post_comments: Comment[];
}

export const PostComponent: React.FC<PostComponentProps> = ({id, author, content, date, post_likes, post_comments}) => {
  return (
    <div className="post">
      <p id="post_author">{author}</p>
      <p id="post_content">{content}</p>
      <p id="post_release_date">{date.toLocaleDateString()} at {date.toLocaleTimeString()}</p>
      <LikeComponent post_likes={post_likes}/>
      <CommentsSection post_comments={post_comments} />
    </div>

  )
}