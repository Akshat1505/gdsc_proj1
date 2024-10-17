import { useState } from 'react'
import './App.css'
import Login from './assets/Components/Login'
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Dashboard from './assets/Components/Dashboard' 



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App
