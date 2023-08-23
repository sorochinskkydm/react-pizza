import React from 'react';

type CategoriesProps = {
  categoryIndex: number;
  onClickCategory: (index: number) => void;
};

const Categories: React.FC<CategoriesProps> = React.memo(({ categoryIndex, onClickCategory }) => {
  const categoriesArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className='categories'>
      <ul>
        {categoriesArr.map((category, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={categoryIndex === index ? 'active' : ''}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Categories;
