import React from 'react';
import './App.css';
import { PostComponent, PostComponentProps } from './Features/Post/PostComponent';

function App() {
  return (
    <div className="posts-container">
      <PostComponent id="1" author="Noam Reshef" content="This is a simple Kerem Content Post."
       date={new Date()} post_likes={0} post_comments={[]}></PostComponent>
    
    </div>
    
  )
};
export default App;
