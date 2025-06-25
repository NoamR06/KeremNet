import Footer from "../ApplicationLayout/Footer/Footer";
import Navbar from "../ApplicationLayout/NavigationBar/navigationBar";
import { Posts } from "../Post/Post";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Posts />
      <Footer />
    </div>
  );
};
export default HomePage;