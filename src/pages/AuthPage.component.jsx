import React from 'react';

import LoginFormComponent from '../components/LoginForm/LoginForm.component';
import backgroundAuth from '../assets/img/backgroundAuth.jpg';

const LoginBackground = {
  backgroundImage: `url(${backgroundAuth})`,
};
function AuthPageComponent() {
  return (
    <div
      className="uk-background-secondary uk-flex uk-height-viewport uk-light uk-background-cover"
      data-uk-height-viewport="true"
      style={LoginBackground}
    >
      <div className="uk-margin-auto uk-margin-auto-vertical">
        <LoginFormComponent />
      </div>
    </div>
  );
}

export default AuthPageComponent;
