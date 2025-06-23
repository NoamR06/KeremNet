import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PostComponent } from './Features/Post/PostComponent';

function App() {
  return (
    <PostComponent post={
      {
        id: '1',
        author: 'Noam Reshef',
        content: 'This is a simple Kerem Content Post.',
        date: new Date(),
        likes: 0,
        comments: [
          {
            id: '1',
            author: 'Zoee Zebra',
            content: 'This is a comment on the post.',
            date: new Date(),
          },
          {
            id: '2',
            author: 'Master Shifo',
            content: 'This is another comment on the post.',
            date: new Date(),
          },
        ],
    }}></PostComponent>
  )
};
export default App;
