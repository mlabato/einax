import IntroContainer from "./sections/IntroContainer";
import Navbar from "./sections/Navbar";
import ContactIcons from "./ux/ContactIcons";


function App() {
  return (
    <section className="font-lato">
      <Navbar />
      <IntroContainer />
      <ContactIcons />
    </section>
  );
}

export default App;
