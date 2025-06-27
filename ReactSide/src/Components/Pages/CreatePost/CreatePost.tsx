import Footer from "../../ApplicationLayout/Footer/Footer";
import Navbar from "../../ApplicationLayout/NavigationBar/navigationBar";
import "./CreatePost.css"
import PostCreation from "../../PostCreation/PostCreation";

const CreatePost: React.FC = () => {
  return (
    <div className="grid-container">
      <div className="top-section "><Navbar /></div>
      <div className="middle-section"><PostCreation /></div>
      <div className="bottom-section"><Footer /></div>
    </div>
  );
};
export default CreatePost;