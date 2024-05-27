import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Cart from './components/Cart'
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Footer from './components/Footer/Footer'



function App() {
  // const [count,setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={ <Cart />} />
        <Route path='/search' element={ <Search />} />
        <Route path='/productdetail' element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
                   
    </>
  )
}

export default App
