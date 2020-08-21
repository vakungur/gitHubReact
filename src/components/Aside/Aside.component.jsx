import React from 'react';
import { Link } from 'react-router-dom';

function AsideComponent() {
  return (
    <div className="uk-width-medium uk-background-secondary uk-height-viewport uk-light">
      <div className="uk-child-width-* uk-height-viewport" data-uk-grid="true">
        <div className="uk-inline">
          <div className="uk-border-circle profile-img uk-position-center">
            <p>FOTO</p>
            <h4>NameLogin</h4>
          </div>
        </div>
        <nav className="uk-inline">
          <ul className="uk-nav uk-nav-primary uk-nav-default uk-position-center">
            <li>
              <Link to="/terminals">Терминалы</Link>
            </li>
            <li>
              <Link to="/buyers">Покупатели</Link>
            </li>
          </ul>
        </nav>
        <div className="uk-inline">
          <span className="uk-position-bottom-center"><p>by Vakungur&copy;</p></span>
        </div>
      </div>
    </div>
  );
}

export default AsideComponent;
