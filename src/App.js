import HeadNavbar from './components/HeadNavbar';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Shrinidhi from './components/Shrinidhi';
import Project from './components/Project';
import WhyHireMe from './components/WhyHireMe';
import OptimisticDesign from './components/OptimisticDesign';
import Feedback from './components/Feedback';
import DesignTools from './components/DesignTools';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <HeadNavbar/>
    <Shrinidhi/>
    <Project/>
    <WhyHireMe/>
    <OptimisticDesign/>
    <Feedback/>
    <DesignTools/>
    <ContactMe/>
    <Footer/>
    </>
  );
}

export default App;
