import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import DefaultLayout from './layouts/DefaultLayout';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
// providers 
import { GlobalProvider } from './contexts/GlobalContext';
import { AlertProvider } from './contexts/AlertContext';
function App() {

  return (
    <>
      {
        <AlertProvider>
          <GlobalProvider>

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
              </BrowserRouter>

          </GlobalProvider>
        </AlertProvider>
      }
    </>
  )
}

export default App
