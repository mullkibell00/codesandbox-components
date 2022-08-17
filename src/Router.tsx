import { Route, Routes, Switch } from 'react-router-dom';
import Main from './pages/Main';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="components">
            </Route>
        </Switch>
    );
}

export default Router;