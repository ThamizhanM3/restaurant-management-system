import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm'
import NavBar from './Components/NavBar/NavBar'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage';
import Dashboard from './Components/Dashboard/Dashboard';
import Transactions from './Components/Transactions/Transactions';
import Incomes from './Components/Incomes/Incomes';
import Form from './Components/Form/Form';
import Expenses from './Components/Expenses/Expenses'; 
import FoodMenu from './Components/FoodMenu/FoodMenu';
import Cart from './Components/Cart/Cart';

function App() { 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<HomePage />} /> 
        <Route path='/login' element = {<LoginForm />} />
        <Route path='/register' element = {<RegisterForm />} />
        <Route path='/dashboard' element = {<Dashboard />} />
        <Route path='/transactions' element = {<Transactions />} />
        <Route path='/incomes' element = {<Incomes />} />
        <Route path='/form' element = {<Form />} />
        <Route path='/expenses' element = {<Expenses />} />
        <Route path='/foodmenu' element = {<FoodMenu />} />
        <Route path='/cart' element = {<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
