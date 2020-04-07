import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk";
import HomeReducer from './home-reducer';
import ServicesReducer from './services-reducer';
import AboutReducer from './about-reducer';
import WorkReducer from './work-reducer';
import ContactsReducer from './contacts-reducer';

let reducers = combineReducers({
    HomePage: HomeReducer,
    ServicesPage: ServicesReducer,
    AboutPage: AboutReducer,
    WorkPage: WorkReducer,
    ContactsPage: ContactsReducer,
    form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;