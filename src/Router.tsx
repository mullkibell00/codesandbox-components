import { Route, Routes, Switch } from 'react-router-dom';
import Main from './pages/Main';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
        </Switch>
    );
}

export default Router;