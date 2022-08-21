import About from "./components/About";
import Contact from "./components/Contact";
import Exprience from "./components/Exprience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Socials from "./components/Socials";
import Redirect from "./components/Redirect";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <div>
                <Navbar />
                <Home />
                <About />
                <Portfolio />
                <Exprience />
                <Contact />
                <Socials />
            </div>
            <Routes>
                <Route path="/redirect" element={<Redirect />} />
            </Routes>
        </>
    );
}

export default App;
