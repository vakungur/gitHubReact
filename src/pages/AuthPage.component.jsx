import React from 'react';

import LoginFormComponent from '../components/LoginForm/LoginForm.component';

function AuthPageComponent() {
  return (
    <div className="uk-background-secondary uk-light uk-flex uk-height-medium uk-text-center" uk-height-viewport="true">
      <div className="uk-margin-auto uk-margin-auto-vertical uk-width-1-2@s">
        <LoginFormComponent />
      </div>
    </div>
  );
}

export default AuthPageComponent;
