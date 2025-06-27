import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage/HomePage';
import { SinglePost } from './Components/Pages/SinglePost/SinglePost';
import CreatePost from './Components/Pages/CreatePost/CreatePost';



const App: React.FC = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:post_id" element={<SinglePost />} />
        <Route path="/create_post" element={<CreatePost />} />
      </Routes>
    </Fragment>
  );
};
export default App;