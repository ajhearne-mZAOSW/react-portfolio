import React from 'react';
import horiseon from '../assets/images/horiseon.png';
import weatherDashboard from '../assets/images/weather-dashboard.png';
import soundSpiral from '../assets/images/sound-spiral.png';
import personalBlog from '../assets/images/personal-blog.png';
import taskBoard from '../assets/images/task-board.png';

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
                    <img src={horiseon} alt="Horiseon refactor website landing screenshot"/>
                    <h3>Horiseon Refactor</h3>
                </a>
            </div>
            <div className="work">
                <a href="https://ajhearne-mzaosw.github.io/kanban-task-board/">
                    <img src={taskBoard} alt="css-cheatsheet website landing screenshot"/>
                    <h3>CSS Cheatsheet</h3>
                </a>
                <a href="https://ajhearne-mzaosw.github.io/weather-dashboard/">
                    <img src={weatherDashboard} alt="Weather Dashboard landing screenshot"/>
                    <h3>Weather Dashboard</h3>
                </a>
                <a href="https://github.com/BenJR546/sound-spiral">
                    <img src={soundSpiral} alt="Sound Spiral landing screenshot"/>
                    <h3>Sound Spiral</h3>
                </a>
                <a href="https://ajhearne-mzaosw.github.io/personal-blog/">
                    <img src={personalBlog} alt="personal blog landing screenshot"/>
                    <h3>Coming Soon</h3>
                </a>
            </div>
        </div>
    </section>
);

export default Projects;