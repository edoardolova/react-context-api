import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import DefaultLayout from './layouts/DefaultLayout';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
function App() {

  return (
    <>
    {
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage}/>
            <Route path='/products' Component={ProductsPage}/>
            <Route path='/about' Component={AboutPage}/>
            <Route path='/products/:id' Component={ProductDetail}></Route>
            <Route path='*' Component={NotFound}/>
          </Route>
        </Routes>
      </BrowserRouter>}
    </>
  )
}

export default App
