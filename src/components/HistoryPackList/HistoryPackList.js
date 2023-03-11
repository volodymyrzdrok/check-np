import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeHistory, selectHistoryPackList } from 'redux/appSlice';

const HistoryPackList = () => {
  const historyList = useSelector(selectHistoryPackList);
  const dispatch = useDispatch();

  // console.log('historyList :', historyList);
  return (
    <div>
      <p>Історія</p>
      <ul>
        {historyList.length > 0 &&
          historyList.map((el, i) => (
            <li key={i}>
              <NavLink to={`/${el}`}>{el}</NavLink>
            </li>
          ))}
      </ul>
      <button
        onClick={() => {
          dispatch(removeHistory());
        }}
      >
        remov history
      </button>
    </div>
  );
};

export default HistoryPackList;
