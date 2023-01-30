import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import About from './pages/About';
import DownloadApp from './pages/DownloadApp';
import MyCart from './pages/MyCart';
import Wallet from './pages/Wallet';
// import Swiper from 'swiper';
// import 'swiper/css';
// import swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { useState, useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {

  // const swiper = new Swiper('.swiper', {
  //   modules: [Navigation, Pagination],
  //   ...
  // });

  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'vertical',
  //   loop: true,
  
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)

  }, [])

  return (
    <div>
      {
        loading ?
          <DotLoader color={'#070707'} loading={loading} size={100} className='spinner-DotLoader' />
          :
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/downloadapp" element={<DownloadApp />} />
            <Route path="/mycart" element={<MyCart />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      }
    </div>
  );
}

export default App;
