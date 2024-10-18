import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './components/Hero'
import BlogComponent from './components/BlogComponent'

export const Routing = () => {
    return (
      <Router>
        <Routes>
            <Route path="/blog" >
                <BlogComponent />
            </Route>
            <Route path="/" >
                <Hero />
            </Route>
        </Routes>
      </Router>
    );
  }