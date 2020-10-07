import React from 'react'
import { Button } from 'semantic-ui-react'


const BlogCard = (props) => {
    let blogDescription = props.blog.description.split("<p>")[1]
    let finalBlogDescription = ""
    if (blogDescription) {
        for (let x = 0; x < 275; x++) {
            if (blogDescription[x + 1] === "<" && blogDescription[x + 2] === "/") {
                x = 275;
            }
            if (blogDescription[x] !== undefined) {
                finalBlogDescription = finalBlogDescription + blogDescription[x]
            }
        }
        finalBlogDescription = finalBlogDescription + "..."
    }
    console.log(props.blog.thumbnail)
    if (props.blog.title === "Get Connected With Others By Adding a Contact Form to Your React Site") {
        finalBlogDescription = "Are you looking for a resource for your visitors to get in touch with you on your website? You came to the right place. I’m here to explain how to add a pretty nifty contact form to your React website with a couple of easy steps. Before I do that though, let me show you some reasons..."
    }
    if (props.blog.title === "How to deploy a React app with Netlify &amp; set up continuous deployment via Github") {
        finalBlogDescription = "So far I have only used Heroku to deploy my web applications. Well, that changed today as I decided to branch out and try a different deployment service. I love Heroku, and it is so easy to use, but I hate how my applications go to sleep after 30 minut..."
    }
    if (props.blog.title === "7 Tips for Solving Algorithms and Coding Challenges") {
        finalBlogDescription = "Hello there, lately I’ve been working with a great deal of algorithms and coding challenges as I continue my journey for my first full time position as a software engineer! More than likely, you will have to complete a coding challenge or solve an algorithm to acquire a job in software developmen..."
    }
    if (props.blog.title === "How To Dynamically Render Your Medium Blog Posts On Your Portfolio Site") {
        finalBlogDescription = "If you haven’t read any of my previous articles or posts, I’m a software developer who is currently searching for his first full time position. In the meantime, I write weekly blogs and work on personal coding projects. The first project I created after I graduated from Flatiron was my Portfol..."
    }
    return (
        <div className='blog-card'>
            <div className='blog-card-left'>
                <img src={props.blog.thumbnail} className='blog-card-image' alt='blog' />
            </div>
            <div className='blog-card-right'>
                <h1 className='blog-card-title'>{props.blog.title}</h1>
                <p>
                    <span className='blog-card-bold-text'>Published Date:</span> <span>{props.blog.pubDate.split(" ")[0]}</span>
                </p>
                <span className='blog-card-bold-text'>Description:</span>
                <p className='blog-card-description'>{finalBlogDescription}</p>
                <p className='blog-card-bold-text'>Want to read more?</p>
                <a href={props.blog.link} target="_blank" rel="noopener noreferrer">
                    <Button color='green'>View Full Article</Button>
                </a>
            </div>
        </div>
    )
}


export default BlogCard