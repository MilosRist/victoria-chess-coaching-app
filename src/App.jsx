import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import Hero from './components/Hero'
import BlogComponent from './components/BlogComponent'
import About from './components/About'
import Post1 from './posts/Post1'
import Prices from './components/Prices'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/blog" element={<BlogComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/lesson1" element={<Post1 />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
    </Router>
  )
}

export default App;