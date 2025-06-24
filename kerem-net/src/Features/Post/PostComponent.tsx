import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Comment } from "./Comment/Comment";
import './PostComponent.css';
import { AddCommentButton } from "./AddCommentForm/AddCommentForm";
import { CommentsSection } from "./Comment/CommentSection";
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
  const [likes, setLikes] = useState(post_likes);
  const [comments, setComments] = useState(post_comments);
  const [inputUsername, setInputUsername] = useState<string>('');
  const [inputContent, setInputContent] = useState<string>('');

  const handleInputUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUsername(event.target.value);
  };

  const handleInputContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(event.target.value);
  };


  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = () => {
    setComments([...comments, ({
      id: uuidv4(),
      author: inputUsername || "Anonymous",
      content: inputContent || "No content",
      date: new Date(),
    })]);
  };

  return (
    <div className="post">
      <p id="post_author">{author}</p>
      <p id="post_content">{content}</p>
      <p id="post_release_date">{date.toLocaleDateString()} at {date.toLocaleTimeString()}</p>
      <LikeComponent post_likes={likes} />
      <div className="comments">
        <h2>Comments</h2>
        <CommentsSection comments={comments} />
        <input type="text" value={inputUsername} onChange={handleInputUsernameChange} id="post_add_comment_name" placeholder="User name" />
        <input type="text" value={inputContent} onChange={handleInputContentChange} id="post_add_comment_content" placeholder="Comment content" />
        <AddCommentButton onButtonClick={handleAddComment} />
      </div>
    </div>

  )
}