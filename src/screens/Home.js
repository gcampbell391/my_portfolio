import React from 'react'
import Header from '../components/Header'
import MyProfile from '../components/MyProfile'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="homeScreen">
            <Header />
            <div className="myProfileBackground">
                <MyProfile />
            </div>
            <Footer />
        </div>
    )
}

export default Home