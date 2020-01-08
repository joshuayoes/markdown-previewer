import React from 'react'
import { connect } from 'react-redux'
import { updateMarkdown } from '../redux/actions'

const Editor = ({ dispatch, markdown }) => {
    
    const handleChange = (event) => {
        const {value} = event.target
        dispatch(updateMarkdown(value))
    }

    return (
        <textarea 
            id="editor" 
            onChange={handleChange}
            value={markdown}
        >
        </textarea>
    )
}

const mapStateToProps = (state) => {
    const { markdown } = state
    return { markdown }
}

export default connect(mapStateToProps)(Editor);