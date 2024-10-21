import React from 'react';
import avatar from '../assets/images/avatar.png';

const Home = () => (
    <section className="hero">
        <div className="title-name">
            <div>
                <h1>Alana</h1>
            </div>
            <img src={avatar} alt="avatar line drawing"/>;
        </div>
        <div>
            <p>
                electrical engineer,
                programmer in training.
            </p>
        </div>
    </section>
);

export default Home;
