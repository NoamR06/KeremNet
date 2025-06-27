import React, { useEffect, useState } from 'react';
import { Comment } from '../Comment';
import "./CommentsSection.css";
import { v4 as uuidv4 } from 'uuid';
import { AddCommentButton } from '../AddCommentButton/AddCommentButton';
import { UserComments } from '../UserComments/UserComments';
import ErrorComponent from '../../../ApplicationLayout/ErrorMessage/Error';
import Loader from '../../../ApplicationLayout/Loader/Loader';

export interface CommentsProps {
  post_comments: Comment[];
}

export const CommentsSection: React.FC<CommentsProps> = ({ post_comments }) => {
    console.log(post_comments)
    const [comments, setComments] = useState<Comment[]>(post_comments);

    const handleAddComment = (inputUsername: string, inputContent: string) => {
        const newComment: Comment = {
            id: uuidv4(),
            author: inputUsername || "Anonymous",
            content: inputContent || "No Content",
            date: new Date(),
        };
        setComments(prevComments => [...prevComments, newComment]);
    };
    return (
    <div className='comments'>
        <AddCommentButton onButtonClick={handleAddComment}/>
        <h2>Comments</h2> 
        <UserComments post_comments={comments} />
    </div>
  )
};