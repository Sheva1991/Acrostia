import Services from "./Services"
import React from 'react'
import { connect } from "react-redux"



const ServicesContainer = (props) => {
    return (
        <Services
            sectionTitle={props.sectionTitle}
            sectionSubTitle={props.sectionSubTitle}
            sectionText={props.sectionText}
        />
    )
}


let mapStateToProps = (state) => ({
    sectionTitle: state.ServicesPage.sectionTitle,
    sectionSubTitle: state.ServicesPage.sectionSubTitle,
    sectionText: state.ServicesPage.sectionText
})

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesContainer)
