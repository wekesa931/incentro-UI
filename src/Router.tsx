import React, { lazy, Suspense } from 'react';
import { Route, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom';
import Loader from './Utility/Loader';
import DashBoard from './Containers/DashBoard/DashBoard';
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from './Utility/route.constants';

const publicRoutes = [
    {
        path: PUBLIC_ROUTE.SIGN_IN,
        exact: true,
        component: lazy(() => import('./Containers/Authentication/SignIn'))
    }
]

const PrivateRoute = ({ children, ...rest }: any) => {
    const isLoggedIn = localStorage.getItem('id_token');
  
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: PUBLIC_ROUTE.SIGN_IN,
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }

const AppRouter = () => {

    return <Suspense fallback={<Loader />}>
    <Router>
      <Switch>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            <route.component />
          </Route>
        ))}
        <PrivateRoute path={PRIVATE_ROUTE.DASHBOARD}>
          <DashBoard />
        </PrivateRoute>
      </Switch>
    </Router>
  </Suspense>
}
 
export default AppRouter;