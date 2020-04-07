// import { profileAPI } from "../api/api";

// const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    sectionTitle: 'CONTACT US',
    sectionText: 'Cras suscipit porttitor porttitor. Morbi sit amet tincidunt sapien. Curabitur posuere lectus aliquet erat rutrum sollicitudin. In enim diam, ullamcorper quis libero et, ultricies commodo est. Quisque at ante vitae justo fermentum viverra ac eu justo. Ut luctus imperdiet lacus, eget laoreet erat posuere quis.',
};

const ContactsReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_POST:
        //     return {
        //         ...state,
        //         postData: [...state.postData, { id: 5, message: action.newPostText, count: 0 }]
        //     }
        default:
            return state;

    }
}

// export const addPostActionCreator = (newPostText) => { return { type: ADD_POST, newPostText } }


export default ContactsReducer;