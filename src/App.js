import React from 'react';
import './App.css';
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import MyProfile from './components/MyProfile';
import Interests from './components/Interests';
import MyProjects from "./components/MyProjects"
import ContactMe from "./components/ContactMe"
import Footer from './components/Footer';
import CurrentProject from './components/CurrentProject';
import DeployedApps from './components/DeployedApps';
import ImageCarousel from './components/ImageCarousel';
import InterestsCarousel from './components/InterestsCarousel'


class App extends React.Component {



  render() {
    return (
      <div className="app">
        <Header />
        <div className="myProfileBackground">
          <MyProfile />
        </div>
        <CurrentProject />
        <div className="infoBody">
          <AboutMe />
        </div>
        <div className="infoBody">
          <Interests />
        </div>
        <div className="carouselContainer">
          <ImageCarousel />
          <InterestsCarousel />
        </div>
        <MyProjects />
        <DeployedApps />
        <ContactMe handleSendClick={this.handleSendClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
