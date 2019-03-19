import React, { Component } from 'react'
import {Link} from 'react-router-dom';

//Default page ifall fel länk uppges
export default class Default extends Component {
  render() {
    //returnerar fel medelande samt länk till todo-appen
    return (
       <div>
      <h1>404 error page not found</h1>
      <h3>The requested URL was not found</h3>
      <Link to="/">
            <a href="returnButton">Gå till TODO-App</a>
          </Link>
      </div>
    )
  }
}