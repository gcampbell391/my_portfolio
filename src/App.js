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


class App extends React.Component {



  render() {
    return (
      <div className="app">
        <Header />
        <MyProfile />
        <div className="infoBody">
          <AboutMe />
          <Interests />
        </div>
        <CurrentProject />
        <MyProjects />
        <ContactMe handleSendClick={this.handleSendClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
