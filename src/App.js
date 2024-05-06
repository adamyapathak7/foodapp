import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import SingleRecipe from './pages/SingleRecipe';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Loginpage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/recipe' element={<SingleRecipe />} />
</Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
