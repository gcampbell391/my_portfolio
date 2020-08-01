import React from 'react'

const NavBar = () => {

    return (
        <div className="navBar">
            <ul className='navBarList'>
                <li className='navBarLink'>
                    <a href="/"> Home</a>
                </li>
                <li className='navBarLink'>
                    <a href="/about"> About</a>
                </li>
                <li className='navBarLink'>
                    <a href="/projects">Projects</a>
                </li>
                <li className='navBarLink'>
                    <a href="/blogs">Blogs</a>
                </li>
                <li className='navBarLink'>
                    <a href="/contact"> Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar