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

const createform = asyncComponent(() =>
import('../createform/index').then(module => module.default, { name: 'createform' })
)

const todoform = asyncComponent(() =>
import('../todo/main/index').then(module => module.default, { name: 'todo' })
)

const App = () => (
    <Router>
        <div>
            <div>
                <Navbar />
            </div>
            <div className="clearfix">&nbsp;</div>
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-4 list-group table-of-contents">
                            <Link className="list-group-item" to="/">Home</Link>
                            <Link className="list-group-item" to="/about">About</Link>
                            <Link className="list-group-item" to="/contact">Contact</Link>
                            <Link className="list-group-item" to="/createform">Create Form</Link>
                            <Link className="list-group-item" to="/todo">Todo App</Link>
                            <a className="list-group-item" href="#navs">Navs</a>
                            <a className="list-group-item" href="#indicators">Indicators</a>
                            <a className="list-group-item" href="#progress-bars">Progress bars</a>
                            <a className="list-group-item" href="#containers">Containers</a>
                            <a className="list-group-item" href="#dialogs">Dialogs</a>
                    </div>
                        <div className="col-lg-9 col-md-9 col-sm-8">
                        <div>
                            <Route exact path="/" component={home} />
                            <Route path="/about" component={about} />
                            <Route path="/contact" component={contact} />
                            <Route path="/createform" component={createform} />
                            <Route path="/todo" component={todoform} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </Router>
)
export default App;