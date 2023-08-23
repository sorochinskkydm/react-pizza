import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories/Categories.tsx';
import Sort from '../components/Sort/Sort.tsx';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock.tsx';
import Skeleton from '../components/PizzaBlock/Skeleton.tsx';
import Pagination from '../components/Pagination/Pagination.tsx';

import { fetchData } from '../redux/slices/pizzaSlice.ts';
import { setCategoryIndex, setSortProperty, setCurrentPage } from '../redux/slices/filterSlice.ts';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { categoryIndex, sortProperty, currentPage, searchValue } = useSelector(
    (state: any) => state.filterReducer,
  );
  const items = useSelector((state: any) => state.pizzaReducer.items);

  // const { searchValue } = useContext(SearchContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const category = categoryIndex > 0 ? `&category=${categoryIndex}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    const page = `?page=${currentPage}&limit=4`;
    const sortBy = `&sortBy=${sortProperty.sortProperty}`;

    setIsLoaded(true);
    dispatch(
      //@ts-ignore
      fetchData({
        category,
        search,
        page,
        sortBy,
      }),
    );
    window.scrollTo(0, 0);
  }, [categoryIndex, sortProperty, searchValue, currentPage, dispatch]);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryIndex(id));
  };
  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };
  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories categoryIndex={categoryIndex} onClickCategory={onChangeCategory} />
          <Sort
            sortValue={sortProperty}
            onClickSort={(item: any) => dispatch(setSortProperty(item))}
          />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>
          {isLoaded
            ? items.map((item: any) => {
                return <PizzaBlock key={item.id} {...item} />;
              })
            : [...new Array(8)].map((_, index) => {
                return <Skeleton key={index} />;
              })}
        </div>
        <Pagination value={currentPage} onPageChange={onChangePage} />
      </div>
    </div>
  );
};

export default Main;
