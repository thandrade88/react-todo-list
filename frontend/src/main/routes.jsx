import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'

export default props => (
    <BrowserRouter>
        <div>
            <Menu/>
            <Switch>
                <Route path="/" component={Todo} exact />
                <Route path="/todo" component={Todo} />
                <Route path="/about" component={About} />
            </Switch>
        </div>
    </BrowserRouter>
)

