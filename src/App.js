import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import ForgetPassWord from './components/ForgetPassWord/ForgetPassWord';
import Header from './components/Header/Header';
import RequerAuth from './components/RequerAuth/RequerAuth';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Registration from './pages/Registration/Registration';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={
          <RequerAuth>
            <Blog />
          </RequerAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgetPassWord/>}/>
        <Route path="*" element = {<NotFoundPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
