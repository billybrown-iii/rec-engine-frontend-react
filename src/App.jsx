import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './routes/Home';
import Setup from './routes/Setup';
import Discover from './routes/Discover';
import { useState } from 'react'
// import ApiResponseDisplay from './components/ApiResponseDisplay'

function App() {
  const [tasteProfile, setTasteProfile] = useState({});

  return (
    <Router>
      <div className='mobile-constrained-segment'>
        <div className='mx-10 my-5'>
        <Link to="/" className='btn mx-10'>Return hither</Link>
        <Link to="/discover" className='btn'>Get rec'd</Link>
        </div>
        <div className="p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup/*" element={<Setup setTasteProfile={setTasteProfile}/>} />
          <Route path="/discover" element={<Discover tasteProfile={tasteProfile} />} />
        </Routes>
        </div>

      {/* <ApiResponseDisplay /> */}



      </div>
    </Router>
  )
}

export default App
