import { useState } from "react";
import ErrorComponent from "../ApplicationLayout/ErrorMessage/Error";
import { BASE_API_URL } from "../../Constants/constants";

const PostCreation: React.FC = () => {
  const [post_author, setAuthor] = useState('');
  const [post_content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success_message, setSuccessMessage] = useState<Boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(true);

    setTimeout(() => setSuccessMessage(false), 5000);

    const postData = {
      id: Math.floor(Math.random() * 1000000),
      author: post_author,
      content: post_content,
      date: new Date(),
      likes: 0,
      comments: []
    };

    try {
      const response = await fetch(`${BASE_API_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Post created:', data);
    } catch (err: any) {
        setError(err.message);
    }
  };
  if (error) return <p> <ErrorComponent received_errors={error} /> </p>;
  return (
<div className="post_creation">
           <h1>Create a New Post</h1>
          <form id="post-creator-form">
              <div className="form-group">
                  <p>Your Name</p>
                  <input type="text" id="author-name-input" placeholder="Write your name here." 
                  value={post_author} onChange={(text) => setAuthor(text.target.value)}/>
                  <p>PostContent</p>
                  <textarea id="post-content-input" rows={4} placeholder="Write your post content here." 
                  required value={post_content} onChange={(text) => setContent(text.target.value)} />
              </div>
              <button type="submit" id="create-post-btn" onClick={handleSubmit}>Post</button>
              {success_message && <p id="success_message">Post was successfully created!</p>}
          </form>
        </div>
  );
};
export default PostCreation;