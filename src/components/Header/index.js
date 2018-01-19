import React from 'react';
import Particles from 'react-particles-js';
import particleConfig from './particlesjs-config';

import './index.css';

const Header = ({ fixedNav }) => (
  <header className="header">
    <Particles params={particleConfig}/>
    <section className="header__wrapper">
      <h1 className="header__tagline">React Summit 2018</h1>

      <section className="header__desc">
        <p>
          React Summit is a one-day community driven event aimed at bringing together frontend
          developers who use React/Javascript or are hoping to learn more about it so as to
          foster deep, valuable discussions around what’s new, what’s possible and best
          practices
        </p>

        <p>
          Join us for a chance to connect in an intimate setting with the React community and
          other frontend developers in Lagos. Learn about industry standard and how to make the
          best out of your current skillset
        </p>
      </section>

      <a href="#" className="header__button">RSVP</a>
    </section>

    <nav className={fixedNav ? "navigation fixed-nav" : "navigation"}>
      <ul className="navigation__list">
        <li><a href="#">About</a></li>
        <li><a href="#">Speakers</a></li>
        <li><a href="#">Schedule</a></li>
        <li><a href="#">Venue</a></li>
        <li><a href="#">Sponsors</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;