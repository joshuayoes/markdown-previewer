import React from 'react'
import { MdWeb } from 'react-icons/md'
import { FaGithub, FaTwitter } from 'react-icons/fa'

export default function Header() {
    return (
        <header>
            <h1 className="home">Markdown Previewer</h1>
            <div className="credits">
                <p>Created by Joshua Yoes</p>
                <a href="http://joshuayoes.com" target="_blank" rel="noopener noreferrer">            
                    <MdWeb size={36} />
                </a>
                <a href="https://github.com/joshuayoes" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} />
                </a>
                <a href="https://twitter.com/joshuayoes" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={32} />
                </a>
            </div>
        </header>
    )
}
