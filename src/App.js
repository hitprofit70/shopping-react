import './App.css';
import Home from './pages/Home';
import { useState, useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";

function App() {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)

  }, [])

  return (

  
    <>
    {

    loading ?
          <DotLoader color={'#070707'} loading={loading} size={100} className='spinner-DotLoader'/>
          :
    <Home/>
     }
    </>
  );
}

export default App;
