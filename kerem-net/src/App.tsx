import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';



const App: React.FC = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Fragment>
  );
};
export default App;