import React from 'react';

import facebook from 'assets/facebook.svg';
import twitter from 'assets/twitter.svg';
import './index.css';

const Speakers = ({onMouseEnter, onMouseLeave, alternateBg}) => (
  <section
    className={alternateBg ? "speakers alternate-bg" : "speakers"}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <h2>
      Speakers
    </h2>
    <div className="speaker__box">
      <img src="http://placehold.it/200" alt="speaker" className="speaker__profile-picture"/>
      <div className="speaker__generic-group">
        <h3 className="speaker__name">
          Foo bar
        </h3>
        <p className="speaker__topic">
          Awesome topic by speaker
        </p>
        <div className="speaker__social-media">
          <img src={facebook} alt=""/>
          <img src={twitter} alt=""/>
        </div>
      </div>
      <p className="speaker__desc">
        Ohans Emmanuel is a UI designer & Front End Developer based in Lagos, Nigeria. He is the Author of the book "Understanding Flexbox". Extremely passionate about delightful user experiences. He currently helps to build payment over messaging for Africa at Kudi.ai
      </p>
    </div>

    <div className="speaker__box">
      <img src="http://placehold.it/200" alt="speaker" className="speaker__profile-picture"/>
      <div className="speaker__generic-group">
        <h3 className="speaker__name">
          Foo bar
        </h3>
        <p className="speaker__topic">
          Awesome topic by speaker
        </p>
        <div className="speaker__social-media">
          <img src={facebook} alt=""/>
          <img src={twitter} alt=""/>
        </div>
      </div>
      <p className="speaker__desc">
        Ohans Emmanuel is a UI designer & Front End Developer based in Lagos, Nigeria. He is the Author of the book "Understanding Flexbox". Extremely passionate about delightful user experiences. He currently helps to build payment over messaging for Africa at Kudi.ai
      </p>
    </div>

    <div className="speaker__box">
      <img src="http://placehold.it/200" alt="speaker" className="speaker__profile-picture"/>
      <div className="speaker__generic-group">
        <h3 className="speaker__name">
          Foo bar
        </h3>
        <p className="speaker__topic">
          Awesome topic by speaker
        </p>
        <div className="speaker__social-media">
          <img src={facebook} alt=""/>
          <img src={twitter} alt=""/>
        </div>
      </div>
      <p className="speaker__desc">
        Ohans Emmanuel is a UI designer & Front End Developer based in Lagos, Nigeria. He is the Author of the book "Understanding Flexbox". Extremely passionate about delightful user experiences. He currently helps to build payment over messaging for Africa at Kudi.ai
      </p>
    </div>

    <div className="speaker__box">
      <img src="http://placehold.it/200" alt="speaker" className="speaker__profile-picture"/>
      <div className="speaker__generic-group">
        <h3 className="speaker__name">
          Foo bar
        </h3>
        <p className="speaker__topic">
          Awesome topic by speaker
        </p>
        <div className="speaker__social-media">
          <img src={facebook} alt=""/>
          <img src={twitter} alt=""/>
        </div>
      </div>
      <p className="speaker__desc">
        Ohans Emmanuel is a UI designer & Front End Developer based in Lagos, Nigeria. He is the Author of the book "Understanding Flexbox". Extremely passionate about delightful user experiences. He currently helps to build payment over messaging for Africa at Kudi.ai
      </p>
    </div>
  </section>
);

export default Speakers;