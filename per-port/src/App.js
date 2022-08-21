import About from "./components/About";
import Contact from "./components/Contact";
import Exprience from "./components/Exprience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Socials from "./components/Socials";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <div className="">
                <About />
                <Portfolio />
                <Exprience />
                <Contact />
            </div>
            <Socials />
        </div>
    );
}

export default App;
