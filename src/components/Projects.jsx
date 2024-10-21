import React from 'react';

const Projects = () => (
    <section className="my-work" id="my-work">
        <div className="my-work-title">
            my work
        </div>
        <p>
            As I'm just at the beginning of my programming journey, my portflio might look a little thin. Be sure to check back from time to time to see what new things I've been working on and how I'm progressing.
            Check out some of the work I've done so far!
        </p>
        <div className="work-portfolio">
            <div className="main-work">
                <a href="https://ajhearne-mzaosw.github.io/W01-Challenge/">
                    {/* <img src="./assets/images/horiseon.png" alt="Horiseon refactor website landing screenshot"> */}
                    <h3>Horiseon Refactor</h3>
                </a>
            </div>
            <div className="work">
                <a href="https://tmkamal.github.io/under-construction-template/">
                    {/* <img src="./assets/images/css-cheatsheet.png" alt="css-cheatsheet website landing screenshot"> */}
                    <h3>CSS Cheatsheet</h3>
                </a>
                <a href="https://tmkamal.github.io/under-construction-template/">
                    {/* <img src="./assets/images/wip.jpg" alt="'website under construction' landing screenshot placeholder"> */}
                    <h3>Coming Soon</h3>
                </a>
                <a href="https://tmkamal.github.io/under-construction-template/">
                    {/* <img src="./assets/images/wip.jpg" alt="'website under construction' landing screenshot placeholder"> */}
                    <h3>Coming Soon</h3>
                </a>
                <a href="https://tmkamal.github.io/under-construction-template/">
                    {/* <img src="./assets/images/wip.jpg" alt="'website under construction' landing screenshot placeholder"> */}
                    <h3>Coming Soon</h3>
                </a>
            </div>
        </div>
    </section>
);

export default Projects;