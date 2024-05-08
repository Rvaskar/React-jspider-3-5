import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import Admin from './component/user/Admin';
import UserDetails from './component/user/UserDetails';
import Featured from './component/products/Featured';
import PageNotFound from './PageNotFound';
import Users from './component/user/Users';
import OrderSummary from './component/OrderSummary';
import ProductList from './component/products/ProductList';
import NewProducts from './component/products/NewProducts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<AboutUs/>}/>

        <Route path='order-summary' element={<OrderSummary/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='products' element={<ProductList/>}>
            <Route index element={<NewProducts/>}/>
            <Route path='new' element={<NewProducts/>}/>
            <Route path='featured' element={<Featured/>}/>
        </Route>

        <Route path='users' element={<Users/>}>
            <Route path=':userId' element={<UserDetails/>}/>
            <Route path='admin' element={<Admin/>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
