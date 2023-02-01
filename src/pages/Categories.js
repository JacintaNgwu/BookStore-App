import React from 'react';
import '../styles/Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/Categories/Category';

const Categories = () => {
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="categories">
      <h2>{categories}</h2>
      <button type="button" className="update" onClick={handleClick}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
