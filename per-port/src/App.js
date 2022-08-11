import About from "./components/About";
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
            <About />
            <Portfolio />
            <Exprience />
            <Socials />
        </div>
    );
}

export default App;
