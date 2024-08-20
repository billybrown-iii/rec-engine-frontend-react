import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './routes/Home';
import TasteProfileSetup from './routes/TasteProfileSetup';
import Discover from './routes/Discover';
import { useState } from 'react'
// import ApiResponseDisplay from './components/ApiResponseDisplay'

function App() {
  // const [count, setCount] = useState(0)
  const [tasteProfile, setTasteProfile] = useState({});

  return (
    <Router>
      <div className='mobile-constrained-segment'>
        <div className='mx-10 my-5'>
        <Link to="/" className='btn mt-20'>Return hither</Link>
        </div>
        <div className="p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup/*" element={<TasteProfileSetup tasteProfile={tasteProfile} setTasteProfile={setTasteProfile}/>} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
        </div>

      {/* <ApiResponseDisplay /> */}



      </div>
    </Router>
  )
}

export default App
