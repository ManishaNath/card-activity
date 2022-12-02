import { Redirect, Route, Switch } from 'react-router-dom';

import { Main } from './pages/Main';
import { Providers } from './Providers';
import { TermsAndConditions } from './pages/TermAndConditions';

export const App = () => (
    <Providers>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route
                exact
                path="/terms-and-conditions"
                component={TermsAndConditions}
            />
            <Redirect exact from="*" to="/" />
        </Switch>
    </Providers>
);
