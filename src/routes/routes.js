import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React, {lazy, Suspense} from 'react'

const Header = lazy(() => import('../components/header/header'));
const Footer = lazy(() => import('../components/footer/footer'));
const NotFound = lazy(() => import('../modules/not-found/not-found'));
const Elements = lazy(() => import('../modules/elements/elements'));
const ViewElement = lazy(() => import('../modules/view-element/view-element'));

export const paths = {
    root: '/',
    viewElement: '/view-element/:id',
    viewElementBase: '/view-element/',
};

export const Routes = () => (
    <Router basename={process.env.REACT_APP_APP_BASE_URL}>
        <Suspense fallback='Loading component...'>
            <Header/>
            <Switch>
                <Route
                    exact
                    path={paths.root}
                    render={props => <Elements {...props} />}
                />
                <Route
                    exact
                    path={paths.viewElement}
                    render={props => <ViewElement {...props} />}
                />
                <Route render={props => <NotFound {...props} />}/>
            </Switch>
            <Footer/>
        </Suspense>
    </Router>
);