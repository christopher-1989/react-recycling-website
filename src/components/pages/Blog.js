import React from 'react'
import './Blog.css';
import '../Button.css'

function Blog() {
    const handleClick = () => alert("You have clicked the button");

    return (
        <div className="main-container">
            <h1>Blog</h1>
            <div className="blog-container">
                <textarea 
                    className="blog-entry" 
                    placeholder="Add to the blog...">    
                </textarea>
                <div 
                    className="btn btn--primary btn--large" 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={handleClick}
                >
                    Save Post
                </div>
            </div>
        </div>
    )
}

export default Blog
