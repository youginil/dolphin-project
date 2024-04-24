import { render } from 'solid-js/web';
import { Route, Router } from '@solidjs/router';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'highlight.js/styles/default.css';
import './index.css';
import App from './App';
import { initLanguage } from './i18n';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Downloads from './pages/Downloads';
import DocBasic from './pages/docs/Basic';
import DocDemo from './pages/docs/Demo';
import DocDeveloper from './pages/docs/Developer';
import DocTemplates from './pages/Templates';
import { DocOverview } from './pages/docs/Overview';

initLanguage();
const root = document.getElementById('root');

render(
    () => (
        <Router root={App}>
            <Route path="/" component={Home}></Route>
            <Route path="/docs" component={Docs}>
                <Route path="" component={DocOverview}></Route>
                <Route path="/basic" component={DocBasic}></Route>
                <Route path="/demo" component={DocDemo}></Route>
                <Route path="/developer" component={DocDeveloper}></Route>
            </Route>
            <Route path="/templates" component={DocTemplates}></Route>
            <Route path="/downloads" component={Downloads}></Route>
        </Router>
    ),
    root!,
);
