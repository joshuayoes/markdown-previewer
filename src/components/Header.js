import React, {useState} from 'react'
import { connect } from 'react-redux'
import { MdWeb, MdFileDownload } from 'react-icons/md'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import FileSaver from 'file-saver'


const Header = ({ markdown }) => {
    const [markdownTitle, setMarkdownTitle] = useState("");

    const saveMarkdown = () => {
        const markdownTitleFallback = (markdownTitle === "") ? "README" : markdownTitle;
        const markdownBlob = new Blob([markdown], {type: "text/markdown; charset=UTF-8"});
        FileSaver.saveAs(markdownBlob, `${markdownTitleFallback}.md`);
    }

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
            <div className="file">
                <input
                    type="text"
                    placeholder={"README"}
                    value={markdownTitle}
                    onChange={(event) => setMarkdownTitle(event.target.value)}
                />
                <p>.md</p>
                <button onClick={saveMarkdown}>
                    <MdFileDownload size={26} />
                    Download
                </button>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    const { markdown } = state
    return { markdown }
}

export default connect(mapStateToProps)(Header);
