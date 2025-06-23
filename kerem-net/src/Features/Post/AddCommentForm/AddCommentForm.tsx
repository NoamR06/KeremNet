import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Comment } from '../Comment/Comment';

interface AddCommentButtonProps {
  onButtonClick: () => void;
}

export const AddCommentButton: React.FC<AddCommentButtonProps> = ({ onButtonClick }) => {
    return (
    <div>
        <button id="post_add_comment_button" onClick={onButtonClick}>
          Add Comment
        </button>
    </div>
  )
}