// import { profileAPI } from "../api/api";

// const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {

    // postData: [
    //     { id: 1, count: 4, message: 'My first post' },
    //     { id: 2, count: 7, message: 'My name is Vlad' },
    //     { id: 3, count: 9, message: 'My name is Vlad' },
    //     { id: 4, count: 1, message: 'My name is Vlad' },
    // ],
    // profile: null,
    // status: '',
};

const HomeReducer = (state = initialState, action) => {
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


export default HomeReducer;