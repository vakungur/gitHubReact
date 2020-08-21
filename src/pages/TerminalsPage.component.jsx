import React from 'react';

import AsideComponent from '../components/Aside/Aside.component';
import blackBackground from '../assets/img/blackBackground.jpg';

const background = {
  backgroundImage: `url(${blackBackground})`,
};

function TerminalsPageComponent() {
  return (
    <div className="uk-flex uk-child-width-* uk-light">
      <AsideComponent />
      <div
        className="uk-background-secondary uk-height-viewport uk-light uk-background-cover"
        data-uk-height-viewport="true"
        style={background}
      >
        <button className="uk-button uk-button-default">Добавиь терминал</button>
        <h1>Terminals</h1>
        <div className="uk-overflow-auto">
          <table className="uk-table uk-table-divider">
            <thead>
              <tr>
                <th>Заголовок</th>
                <th>Заголовок</th>
                <th>Заголовок</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ячейка</td>
                <td>Ячейка</td>
                <td>Ячейка</td>
              </tr>
              <tr>
                <td>Ячейка</td>
                <td>Ячейка</td>
                <td>Ячейка</td>
              </tr>
              <tr>
                <td>Ячейка</td>
                <td>Ячейка</td>
                <td>Ячейка</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TerminalsPageComponent;
