
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes, privateRoutes } from './AllRoutes';
import { PrivateRoute } from '...';

const ListRoutes = () => {
    return (
        <Switch>
        {
            routes.map(route => (
                <Route {...route} />
            ))
        }
        {
            privateRoutes.map(proute => {
                <PrivateRoute {...proute} />
            })
        }
        </Switch>
    )
}

export default ListRoutes