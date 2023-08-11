import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Porfolio from "./components/Porfolio";
import SocialLinks from "./components/SocialLinks";
import Tecnologias from "./components/Tecnologias";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Porfolio />
      <Tecnologias />
      <ContactMe />
      <SocialLinks />
    </div>
  );
}

export default App;
