import Contacts from "./Contacts"
import React from 'react'
import { connect } from "react-redux"



const ContactsContainer = (props) => {
    return (
        <Contacts
            sectionTitle={props.sectionTitle}
            sectionText={props.sectionText}
        />
    )
}

let mapStateToProps = (state) => ({
    sectionTitle: state.ContactsPage.sectionTitle,
    sectionText: state.ContactsPage.sectionText
})

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer)