import React from 'react';

function LoginFormComponent() {
  return (
    <form>
      <div className="uk-margin">
        <div className="uk-inline">
          <span className="uk-form-icon" uk-icon="icon: user" />
          <input className="uk-input" type="text" placeholder="Логин" />
        </div>
      </div>
      <div className="uk-margin">
        <div className="uk-inline">
          <span className="uk-form-icon" uk-icon="icon: lock" />
          <input className="uk-input" type="text" placeholder="Пароль" />
        </div>
      </div>
      <div className="uk-margin">
        <button className="uk-button uk-button-default" type="submit">Войти</button>
      </div>
    </form>
  );
}

export default LoginFormComponent;
