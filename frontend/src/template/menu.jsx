import React from 'react'
import { NavLink } from "react-router-dom";


export default props => (
    <div className='mb-4'>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
                <i className="fa fa-calendar-check-o"></i> TodoApp
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/todo" >Tarefas</NavLink>

                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" >Sobre</NavLink>
                    </li>
                </ul>
            </div>
        </nav>


    </div>
)