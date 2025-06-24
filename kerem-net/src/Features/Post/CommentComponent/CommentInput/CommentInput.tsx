import React, { Fragment } from 'react';
import { Comment } from '../Comment';

interface CommentInputProps {
  InputUsernameValue: string;
  InputContentValue: string;
  handleUsernameInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleContentInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const CommentInput: React.FC<CommentInputProps> = 
({ InputUsernameValue, InputContentValue, handleUsernameInput, handleContentInput }) => {
  return (
    <Fragment>
        <input type="text" value={InputUsernameValue} onChange={handleUsernameInput} id="post_add_comment_name" 
        placeholder="User name" />
        <input type="text" value={InputContentValue} onChange={handleContentInput} id="post_add_comment_content" 
        placeholder="Comment content" />
    </Fragment>
  )
};