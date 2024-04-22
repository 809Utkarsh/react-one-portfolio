import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Experince from "./Components/Experince";
import Contact from "./Components/Contact";
import Codingprofile from "./Components/Codingprofile";

function App() {
  return (
    <div>
    <Navbar/>
    <Home/> 
    <About/>
    <Portfolio/>
    <Codingprofile/>
    <Experince/>
    <Contact/>
    <SocialLinks/>
    </div>
  );
}

export default App;
