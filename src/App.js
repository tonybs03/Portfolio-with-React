import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';


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
                        <Route path='/home' element={<Home />}></Route>
                        <Route exact path='/' element={<Home />}></Route>
                        <Route path='/Portfolio-with-React/' element={<Home />}></Route>
                        <Route path='/About%20Me' element={<About />} ></Route>
                        <Route path='/Portfolio' element={<Portfolio />} ></Route>
                        <Route path='/Contact' element={<Contact />}></Route>
                        <Route path='/Resume' element={<Resume />}></Route>
                    </Routes>
                    <Footer/>
                </div>
            </div>
        </Router>
    )
}
export default App;