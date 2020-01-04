import React from 'react'
import {connect} from 'react-redux'
import { updateMarkdown } from './redux/actions'

const Editor = ({ dispatch }) => {
    
    const handleChange = (event) => {
        const {value} = event.target
        dispatch(updateMarkdown(value))
    }

    return (
        <textarea id="editor" onChange={handleChange}>
            
        </textarea>
    )
}

export default connect()(Editor);