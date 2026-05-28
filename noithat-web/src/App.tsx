import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Services from './pages/Services'
import Projects from './pages/Projects'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/san-pham/:id" element={<ProductDetail />} />
          <Route path="/dich-vu" element={<Services />} />
          <Route path="/du-an" element={<Projects />} />
          <Route path="/ve-chung-toi" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/lien-he" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  )
}
