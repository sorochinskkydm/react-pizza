import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

const Cart = lazy(() => import(/*webpackChunkName:"Cart"*/ './pages/Cart.tsx'));
const NotFound = lazy(() => import(/* webpackChunkName:"NotFound"*/ './pages/NotFound.tsx'));
const Header = lazy(() => import(/*webpackChunkName:"Header"*/ './components/Header/Header.tsx'));
const Main = lazy(() => import(/*webpackChunkName:"Main"*/ './pages/Main.tsx'));

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<div>Загрузкааа...</div>}>
                <Main />
              </Suspense>
            }
          />
          <Route
            path='*'
            element={
              <Suspense fallback={<div>Загрузкааа...</div>}>
                <NotFound />
              </Suspense>
            }
          />
          <Route
            path='/cart'
            element={
              <Suspense fallback={<div>Загрузкааа...</div>}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path='/cart/:anyIdOrIndex'
            element={
              <Suspense fallback={<div>Загрузкааа...</div>}>
                <Cart />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
export default App;
