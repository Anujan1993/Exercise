import React from 'react';
import { Link } from 'react-router-dom';

  export default class Nav extends React.Component {
    render() {    
      return (
        <nav className="Nav">
          <div className="Nav__container">
            <div className="Nav__right">
              <ul className="Nav__item-wrapper">
                <li className="Nav__item">
                  <Link className="Nav__link" to="/">Home</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/intro">Intro</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/guide">Guide</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/reference">reference</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }