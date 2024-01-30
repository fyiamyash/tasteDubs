import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useState } from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import './App.css'
import Home from './Home'
import AdminPage from './AdminPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
    <>
    <Router>
    <Routes>
      <Route path={"/adminPage"} element ={<AdminPage />} />
      <Route path={"/"} element ={ <div className="home-page">
      <Home />
    </div>} />
    </Routes>
     </Router>
    </>
    </RecoilRoot>
  )
}

export default App
