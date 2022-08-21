import About from "./components/About";
import Contact from "./components/Contact";
import Exprience from "./components/Exprience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Socials from "./components/Socials";
import Redirect from "./components/Redirect";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Portfolio />
            <Exprience />
            <Contact />
            <Socials />
            <Redirect />
        </div>
    );
}

export default App;
