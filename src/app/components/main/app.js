import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../navbar/index'
import { Jumbotron } from '../jumbotron/index'


import { HashRouter as Router, Route, Link } from 'react-router-dom';
import asyncComponent from './AsyncComponent';

const home = asyncComponent(() =>
    import('../home/index').then(module => module.default, { name: 'home' })
)

const about = asyncComponent(() =>
    import('../about/index').then(module => module.default, { name: 'about' })
)

const contact = asyncComponent(() =>
    import('../contact/index').then(module => module.default, { name: 'contact' })
)

const App = () => (
    <Router>
        <div>
            <div>
                <Navbar />
            </div>
            <div className="container">
                <Route exact path="/" component={home} />
                <Route path="/about" component={about} />
                <Route path="/contact" component={contact} />
            </div>
        </div>
    </Router>
)
export default App;