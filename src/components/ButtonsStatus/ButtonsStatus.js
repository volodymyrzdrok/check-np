import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from 'utils/routes';

const ButtonsStatus = () => {
  return (
    <div>
      <button>
        <NavLink to={routes.home}>Перевірка ТТН</NavLink>
      </button>

      <button>
        <NavLink to={routes.departList}>Список відділень</NavLink>
      </button>
    </div>
  );
};

export default ButtonsStatus;
