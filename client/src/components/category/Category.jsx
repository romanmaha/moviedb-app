import React from 'react';
import './category.scss';

const Category = ({ category, active, setCategory }) => {
  return (
    <div className="moviesCategory">
      <div className={category === active ? 'moviesCategoryItem active' : 'moviesCategoryItem'} onClick={() => setCategory(`${category}`)}>
        {category}
      </div>
    </div>
  );
};

export default Category;
