import * as React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'src/pages/Home/containers/Home';
import Explore from 'src/pages/Explore/containers/Explore';
import Product from 'src/pages/Product/containers/Product';
import { useLocation } from 'react-router-dom';

const About = () => <>About</>;

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default Router;
