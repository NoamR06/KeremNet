import React, { useState } from 'react';
import "./AddCommentButton.css"
import { argv } from 'process';

interface AddCommentButtonProps {
  onButtonClick: (inputUsername: string, inputContent: string) => void;
}

export const AddCommentButton: React.FC<AddCommentButtonProps> = ({ onButtonClick}) => {
    const [inputUsername, setInputUsername] = useState<string>('');
    const [inputContent, setInputContent] = useState<string>('');
  
    const handleInputUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputUsername(event.target.value);
    };
  
    const handleInputContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputContent(event.target.value);
    };

    return (
    <div>
        <input type="text" value={inputUsername} onChange={handleInputUsernameChange} id="post_add_comment_name" 
        placeholder="User name" />
        <input type="text" value={inputContent} onChange={handleInputContentChange} id="post_add_comment_content" 
        placeholder="Comment content" />
        <button id="post_add_comment_button" onClick={() => onButtonClick(inputUsername.toString(), inputContent.toString())}>
          Add Comment
        </button>
    </div>
  )
}