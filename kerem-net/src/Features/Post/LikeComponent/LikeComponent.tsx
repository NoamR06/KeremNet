import { useState } from "react";

interface LikeComponentProps{
    post_likes: number;
}

export const LikeComponent = ({ post_likes }: LikeComponentProps) => {
  const [likes, setLikes] = useState(post_likes);

    const handleLike = () => {
        setLikes(likes + 1);
    };

  return (
    <div>
      <button id="post_like_button" onClick={handleLike}>Like ({post_likes})</button>
    </div>
  )
}