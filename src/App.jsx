import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import About from './pages/About';
import DownloadApp from './pages/DownloadApp';
import MyCart from './pages/MyCart';
import { useState, useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {

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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      }
    </div>
  );
}

export default App;
