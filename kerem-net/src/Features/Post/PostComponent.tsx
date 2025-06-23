import React, { useState } from "react";

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
}