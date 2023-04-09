import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Header from './components/Header';

function App() {
  const [dark, setDark] = useState(false);
  const [data, setData] = useState([]);
  const handleDarkMode = () => {
    setDark(!dark);
  }
  
  useEffect(() => {
    // 국가코드별: https://restcountries.com/v3.1/alpha/fr
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])
  console.log(data);

  return (
    <div className={dark ? "App dark" : "App"}>
      <Header handleDarkMode={handleDarkMode} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
