import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import ApplicationLayout from './Components/ApplicationLayout/ApplicationLayout';



const App: React.FC = () => {
  return (
    <Fragment>
      <ApplicationLayout />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Fragment>
  );
};
export default App;