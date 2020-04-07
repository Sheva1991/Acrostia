import React from 'react'
import About from "./About"
import { connect } from 'react-redux'



const AboutContainer = (props) => {
    return (
        <About
            sectionTitle={props.sectionTitle}
            sectionText={props.sectionText}
        />
    )
}

let mapStateToProps = (state) => ({
    sectionTitle: state.AboutPage.sectionTitle,
    sectionText: state.AboutPage.sectionText
})

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer)