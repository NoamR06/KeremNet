import React, { Fragment } from 'react';
import Navbar from './Components/ApplicationLayout/NavigationBar/navigationBar';
import { Posts } from './Components/Post/Post';
import Footer from './Components/ApplicationLayout/Footer/Footer';



const App: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Posts />
      <Footer />
    </Fragment>
  );
};
export default App;