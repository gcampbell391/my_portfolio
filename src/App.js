import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import history from './history'

import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';
import Blogs from './screens/Blogs'
import Contact from './screens/Contact';

class App extends React.Component {



  render() {
    return (
      <div className='app'>
        <Router history={history}>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/projects" render={() => <Projects />} />
          <Route exact path="/blogs" render={() => <Blogs />} />
          <Route exact path="/contact" render={() => <Contact />} />
        </Router>
      </div>
    );
  }
}

export default App;


// <div className="app">
// <Header />
// <div className="myProfileBackground">
//   <MyProfile />
// </div>
// <CurrentProject />
// <div className="infoBody">
//   <AboutMe />
// </div>
// <div className="infoBody">
//   <Interests />
// </div>
// <div className="carouselContainer">
//   <ImageCarousel />
//   <InterestsCarousel />
// </div>
// <MyProjects />
// <DeployedApps />
// <ContactMe handleSendClick={this.handleSendClick} />
// <Footer />
// </div>