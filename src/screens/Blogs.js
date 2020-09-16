import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'

import BlogCard from '../components/BlogCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import Roll from 'react-reveal/Roll';
// import Zoom from 'react-reveal/Zoom';





const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gcampbell391")
            .then(resp => resp.json())
            .then(data => {
                setBlogs(data.items)
                console.log(data.items)
            })
    }, [])

    return (
        <div>
            <Header />
            <div id='blogHeaderImageContainer'>
                <img src={require('../images/blogHeader.png')} id='blogHeaderImage' alt='blog header' />
            </div>
            <div className='blogs-container'>
                {blogs.map(blog => {
                    return <BlogCard blog={blog} />
                })}
                <div className='blog-view-all-container'>
                    <a href="https://medium.com/@gcampbell391" target="_blank" rel="noopener noreferrer">
                        <Button color='blue'>View Medium Channel</Button>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blogs