import React, { Component } from 'react';
import Header from 'components/Header';
import About from 'components/About';
import Speakers from 'components/Speakers';

import 'App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedNav: false,
      alternateBg: false
    };

    this.onScroll = this.onScroll.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll(e) {
    if (e.target.documentElement.scrollTop >= 648) {
      this.setState({ fixedNav: true});
    } else {
      this.setState({ fixedNav: false});
    }
  }

  onMouseEnter() {
    this.setState({ alternateBg: true });
  }

  onMouseLeave() {
    this.setState({ alternateBg: false });
  }

  render() {
    return (
      <section className='main-wrapper'>
        <Header fixedNav={this.state.fixedNav} />
        <About onMouseEnter={this.onMouseEnter} alternateBg={this.state.alternateBg} />
        <Speakers onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} alternateBg={this.state.alternateBg} />
      </section>
    );
  }
}

export default App;
