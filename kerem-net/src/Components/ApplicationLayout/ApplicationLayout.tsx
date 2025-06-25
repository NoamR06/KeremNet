import { Fragment } from "react/jsx-runtime";
import Navbar from "./NavigationBar/navigationBar";
import Footer from "./Footer/Footer";

function ApplicationLayout() {
  return (
    <Fragment>
        <Navbar />
        <Footer />
    </Fragment>
    
  )
};
export default ApplicationLayout;