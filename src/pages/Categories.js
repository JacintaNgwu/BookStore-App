import React from 'react';
import '../styles/Categories.css';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/Categories/Category';

const Categories = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="categories">
      <button type="button" className="update" onClick={handleClick}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
