import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import TopHeader from './components/TopHeader';


function App() {
    return (
        <Router>
            <div>
                <div class="background">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <TopHeader />
                    <Routes>
                        <Route path='/About%20Me' element={<About />} ></Route>
                        <Route exact path='/home' element={<Home />}></Route>
                        <Route exact path='/' element={<Home />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>
                        <Route path='/resume' element={<Blog />}></Route>
                    </Routes>
                    {/* <Footer /> */}
                </div>
            </div>
        </Router>
    )
}
export default App;