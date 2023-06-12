import ContactContainer from "./sections/ContactContainer";
import InfoContainer from "./sections/InfoContainer";
import IntroContainer from "./sections/IntroContainer";
import Navbar from "./sections/Navbar";
import ServicesContainer from "./sections/ServicesContainer";
import Footer from "./sections/Footer";
import ContactIcons from "./ux/ContactIcons";
import WorkWithUsContainer from "./sections/WorkWithUsContainer";


function App() {
  return (
    <section className="font-lato">
      <Navbar />
      <IntroContainer />
      <InfoContainer />
      <ServicesContainer />
      <WorkWithUsContainer />
      <ContactContainer />
      <Footer/>
      <ContactIcons />
      
    </section>
  );
}

export default App;
