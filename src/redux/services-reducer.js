// const SET_TITLE = 'SET_TITLE';


let initialState = {
    sectionTitle: 'OUR SERVICES',
    sectionSubTitle: 'Cras commodo mattis justo nec lobortis. Nam ut tellus lobortis, ullamcorper massa sit amet',
    sectionText: 'Cras suscipit porttitor porttitor. Morbi sit amet tincidunt sapien. Curabitur posuere lectus aliquet erat rutrum sollicitudin. In enim diam, ullamcorper quis libero et, ultricies commodo est. Quisque at ante vitae justo fermentum viverra ac eu justo. Ut luctus imperdiet lacus, eget laoreet erat posuere quis.',
};

const ServicesReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_TITLE:
        //     return {
        //         ...state,
        //         sectionTitle: { ...state, sectionTitle: action.sectionTitle }
        //     }
        default:
            return state;

    }
}

// export const setTitleActionCreator = (newTitle) => { return { type: SET_TITLE, newTitle } }


export default ServicesReducer;