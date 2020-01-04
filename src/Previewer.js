import React from 'react'
import {connect} from 'react-redux'

const Previewer = (props) => {
    return (
        <section id="preview">
            {props.markdown}
        </section>
    )
}

const mapStateToProps = (state) => {
    const { markdown } = state;
    return { markdown }
}

export default connect(mapStateToProps)(Previewer);