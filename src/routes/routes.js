import { Route, Switch } from 'react-router-dom';
import React from 'react';

import NotFound from '../modules/not-found/not-found';
import ListRepositories from '../modules/repository/list-repositories/list-repositories';
import Entry from '../modules/entry/entry';
import RepositoryDetails from '../modules/repository/repository-details/repository-details';

export const paths = {
    root: '/',
    repoViewUrl: '/view-org/',
    repoView: '/view-org/:orgId',
    viewElement: '/view-repo/:orgId/:id',
    viewElementBase: '/view-repo/',
};

export const Routes = () => (
    <>
        <Switch>

            <Route
                exact
                path={paths.viewElement}
                render={props => <RepositoryDetails {...props} />}
            />
            <Route
                exact
                path={paths.repoView}
                render={props => <ListRepositories {...props} />}
            />
            <Route
                exact
                path={paths.root}
                render={props => <Entry {...props} />}
            />
            <Route render={props => <NotFound {...props} />}/>
        </Switch>
    </>
);