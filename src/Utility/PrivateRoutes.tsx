import React, { Suspense, lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Loader from './Loader';
import { PRIVATE_ROUTE } from './route.constants';

const routes = [
    {
        path: PRIVATE_ROUTE.DASHBOARD,
        exact: true,
        component: lazy(() => import('../Containers/DashBoard/DashBoard'))
    }
]


 
const PrivateRoutes = () => {
    const { url } = useRouteMatch();

    return <Suspense fallback={<Loader />}>
        <Switch>
        {routes.map((route, idx) => (
            <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
            </Route>
        ))}
        </Switch>
    </Suspense>
}
 
export default PrivateRoutes;