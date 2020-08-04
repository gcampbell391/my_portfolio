import React from 'react'
import Header from '../components/Header'
import MyProfile from '../components/MyProfile'
import Footer from '../components/Footer'
import SocialMediaNavBar from '../components/SocialMediaNavBar'




const Home = () => {
    return (
        <div className="homeScreen">
            <Header />
            <div className="myProfileBackground">
                <MyProfile />
            </div>
            <div className='socialMediaNavBarContainer'>
                <SocialMediaNavBar />
            </div>
            <Footer />
        </div>
    )
}

export default Home