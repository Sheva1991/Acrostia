import React, { Suspense } from 'react';
import './App.scss';
import { Route, withRouter, Switch, HashRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import HomeContainer from './components/Home/HomeContainer';
import Nav from './components/Nav/Nav'
import store from './redux/redux-store';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const ServicesContainer = React.lazy(() => import('./components/Services/ServicesContainer'));
const AboutContainer = React.lazy(() => import('./components/About/AboutContainer'));
const WorkContainer = React.lazy(() => import('./components/Work/WorkContainer'));
const ContactsContainer = React.lazy(() => import('./components/Contacts/ContactsContainer'));

function App({ location }) {
  return (
    <div className='app-wrapper'>
      <Nav />
      <main className="main">
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="fade"
          >
            <div className='route-section'>
              <Switch location={location}>
                <Route exact path='/' render={() => {
                  return <HomeContainer />
                }} />
                <Route path='/Services' render={() => {
                  return <Suspense fallback={<div>Загрузка...</div>}>
                    <ServicesContainer />
                  </Suspense>
                }} />
                <Route path='/About' render={() => {
                  return <Suspense fallback={<div>Загрузка...</div>}>
                    <AboutContainer />
                  </Suspense>
                }} />
                <Route path='/Work' render={() => {
                  return <Suspense fallback={<div>Загрузка...</div>}>
                    <WorkContainer />
                  </Suspense>
                }} />
                <Route path='/Contacts' render={() => {
                  return <Suspense fallback={<div>Загрузка...</div>}>
                    <ContactsContainer />
                  </Suspense>
                }} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>

      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {}))(App);

const JSApp = (props) => {
  // для gh-pages используем hashrouter
  return <HashRouter basename={process.env.PUBLIC_URL === '/'}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter >
}

export default JSApp

