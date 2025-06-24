import React, { Fragment, useState } from 'react';
import { Comment } from '../Comment';
import "./CommentsSection.css";
import { v4 as uuidv4 } from 'uuid';
import { AddCommentButton } from '../AddCommentButton/AddCommentButton';
import { UserComments } from '../UserComments/UserComments';
import { CommentInput } from '../CommentInput/CommentInput';

export interface CommentsProps {
  post_comments: Comment[];
}

export const CommentsSection: React.FC<CommentsProps> = ({ post_comments }) => {
    const [comments, setComments] = useState(post_comments);
    const [inputUsername, setInputUsername] = useState<string>('');
    const [inputContent, setInputContent] = useState<string>('');
  
    const handleInputUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputUsername(event.target.value);
    };
  
    const handleInputContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputContent(event.target.value);
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
    <div className='comments'>
        <h2>Comments</h2> 
        <UserComments post_comments={comments} />
        <CommentInput InputUsernameValue={inputUsername} InputContentValue={inputContent} 
        handleUsernameInput={handleInputUsernameChange} handleContentInput={handleInputContentChange}/>
        <AddCommentButton onButtonClick={handleAddComment}/>
    </div>
  )
};