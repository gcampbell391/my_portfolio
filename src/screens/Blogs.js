import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Blogs = () => {
    return (
        <div>
            <Header />
            <div id='blogHeaderImageContainer'>
                <img src={require('../images/blogHeader.png')} id='blogHeaderImage' alt='blog header' />
            </div>
            <div className='all-blog-container'>
                <div className='blog-flexbox-container'>
                    <a href='https://medium.com/@gcampbell391/react-carousels-around-we-go-8f615fc7730b' target='_blank' rel="noopener noreferrer" className='blog-card'>
                        <img src={require('../images/blog6.png')} alt='blog-card-image6' className='blog-card-image' />
                    </a>
                    <a href='https://medium.com/@gcampbell391/get-ready-to-react-to-videos-for-react-768e1425d5d1' target='_blank' rel="noopener noreferrer" className='blog-card'>
                        <img src={require('../images/blog7.png')} alt='blog-card-image7' className='blog-card-image' />
                    </a>
                    <a href='https://medium.com/@gcampbell391/intro-to-basic-react-hooks-usestate-and-useeffect-1fa3fdb5d9c' target='_blank' rel="noopener noreferrer" className='blog-card'>
                        <img src={require('../images/blog8.png')} className='blog-card-image' alt='blog-card-image8' />
                    </a>
                </div>
                <div className='blog-flexbox-container'>
                    <a href='https://medium.com/@gcampbell391/passing-props-and-states-in-react-828e9a1d33e2' target='_blank' rel="noopener noreferrer" className='blog-card'>
                        <img src={require('../images/blog3.png')} className='blog-card-image' alt='blog-card-image3' />
                    </a>
                    <a href='https://medium.com/@gcampbell391/explanation-of-a-simple-fetch-request-ec43767d9117' target='_blank' rel="noopener noreferrer" className='blog-card'>
                        <img src={require('../images/blog4.png')} className='blog-card-image' alt='blog-card-image4' />
                    </a>
                    <a href='https://medium.com/@gcampbell391/say-yes-mon-to-nodemon-node-mon-d59b278e03a' target='_blank' rel="noopener noreferrer" className='blog-card'>
                        <img src={require('../images/blog5.png')} className='blog-card-image' alt='blog-card-image5' />
                    </a>
                </div>
                <div className='blog-flexbox-container'>
                    <a href='https://medium.com/@gcampbell391/college-vs-coding-bootcamp-b909d08ba021' target='_blank' rel="noopener noreferrer" className='blog-card'>
                        <img src={require('../images/blog1.png')} className='blog-card-image' alt='blog-card-image1' />
                    </a>
                    <a href='https://medium.com/@gcampbell391/cheat-sheet-for-git-commands-a01f6e99eba0' target='_blank' rel="noopener noreferrer" className='blog-card'>
                        <img src={require('../images/blog2.png')} className='blog-card-image' alt='blog-card-image2' />
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blogs