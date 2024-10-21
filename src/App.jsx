import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <Router>
        <div>
            <header className="header">
                <div class="header-socials">
                    <a href="https://github.com/ajhearne-mZAOSW"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/alanahearne/"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="mailto:alanajhearne@gmail"><i class="fa-solid fa-envelope"></i></a>
                </div>
                <nav>     
                    <a href="#about-me">about me</a>
                    <a href="#my-work">my work</a>
                    <a href="#contact-me">contact me</a>
                    <a href="https://drive.google.com/file/d/15gghPdr3WbTVVuS1-B8_lln9o7RYPqg8/view?usp=drive_link">resume</a>
                </nav>
            </header>
            <main>
                <Home />
                <About />
                <Projects />
                <Contact />
            </main>
            <footer>
                <div className="contact-socials">
                    <a href="https://github.com/ajhearne-mZAOSW"><i className="fa-brands fa-github"></i><p>github.com/ajhearne-mZAOSW</p></a>
                    <a href="https://www.linkedin.com/in/alanahearne/"><i className="fa-brands fa-linkedin-in"></i><p>linkedin.me/alanahearne</p></a>
                    <a href="mailto:alanajhearne@gmail"><i className="fa-solid fa-envelope"></i><p>alanajhearne@gmail.com</p></a>
                </div>
            </footer>
        </div>
        </Router>
    );
}

export default App;