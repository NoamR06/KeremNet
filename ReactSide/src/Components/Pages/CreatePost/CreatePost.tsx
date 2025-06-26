import Footer from "../../ApplicationLayout/Footer/Footer";
import Navbar from "../../ApplicationLayout/NavigationBar/navigationBar";
import { Posts } from "../../Post/Post";
import "./CreatePost.css"

const CreatePost: React.FC = () => {
  return (
    <div className="grid-container">
      <div className="top-section "><Navbar /></div>
      <div className="middle-section"><Posts /></div>
      <div className="bottom-section"><Footer /></div>
    </div>
  );
};
export default CreatePost;