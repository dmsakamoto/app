

import React from 'react'
import { Link } from 'react-router'

import { COMPANY_NAME } from '../constants'

export default class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">{ COMPANY_NAME }</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/quiz">User Quiz</Link></li>
              <li><Link to="#"><s>Users</s></Link></li>
              <li><Link to="#"><s>Demo Article</s></Link></li>
              <li><Link to="#"><s>Explore Candidates</s></Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
