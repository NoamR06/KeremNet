import './App.css';
import Navbar from './Components/ApplicationLayout/NavigationBar/navigationBar';
import { Posts } from './Components/Post/Post';

function App() {
  return (
    <div>
      <Navbar/>
      <Posts />
    </div>
    
  )
};
export default App;
