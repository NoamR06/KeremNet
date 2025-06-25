import { Fragment } from "react/jsx-runtime";
import Navbar from "../ApplicationLayout/NavigationBar/navigationBar";
import { Posts } from "../Post/Post";
import Footer from "../ApplicationLayout/Footer/Footer";

const HomePage: React.FC = () => {
  return (
    <Posts />
  );
};
export default HomePage;