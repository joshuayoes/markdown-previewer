import React from 'react'
import {connect} from 'react-redux'
import DOMPurify from 'dompurify'
import marked from 'marked'
marked.setOptions({
    breaks: true
})

const Previewer = (props) => {
    return (
        <section id="preview" className='markdown-body' dangerouslySetInnerHTML={{__html: props.markdown}}>
        </section>
    )
}

const mapStateToProps = (state) => {
    const { markdown } = state;
    const markdownToHtml = marked(markdown);
    const sanitizedHtml = DOMPurify.sanitize(markdownToHtml)

    return { markdown: sanitizedHtml }
}

export default connect(mapStateToProps)(Previewer);