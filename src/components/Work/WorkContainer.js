import Work from "./Work"
import React from 'react'
import { connect } from "react-redux"



const WorkContainer = (props) => {
    return (
        <Work
            sectionTitle={props.sectionTitle}
            sectionText={props.sectionText}
        />
    )
}

let mapStateToProps = (state) => ({
    sectionTitle: state.WorkPage.sectionTitle,
    sectionText: state.WorkPage.sectionText
})

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkContainer)