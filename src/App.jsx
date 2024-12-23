import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './routes/Home';
import Setup from './routes/Setup';
import Discover from './routes/Discover';
import { useState } from 'react'
// import ApiResponseDisplay from './components/ApiResponseDisplay'

const CurrentView = {
  SETUP: 'setup',
  DISCOVER: 'discover',
}

function App() {
  console.log('location:', useLocation())
  const [tasteProfile, setTasteProfile] = useState({});

  const [currentView, setCurrentView] = useState('')
  const linkStyles = 'flex-grow text-center p-4 text-2xl';
  
  let setupLinkStyles = linkStyles;
  let discoverLinkStyles = linkStyles;
  if (currentView === CurrentView.SETUP) setupLinkStyles += ' underline';
  if (currentView === CurrentView.DISCOVER) discoverLinkStyles += ' underline';

  

  return (
    <Router>
      <div className='mobile-constrained-segment'>
        <div className='my-5 flex items-stretch'>
          <div className='w-1/2 border-r-2 border-nosferatu-50 flex'>
            <Link to="/setup" className={setupLinkStyles} onClick={() => setCurrentView(CurrentView.SETUP)}>Setup</Link>
          </div>
          <div className='w-1/2 flex'>
            <Link to="/discover" className={discoverLinkStyles} onClick={() => setCurrentView(CurrentView.DISCOVER)}>Discover</Link>
          </div>
        </div>
        <div className="p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup" element={<Setup setTasteProfile={setTasteProfile}/>} />
          <Route path="/discover" element={<Discover tasteProfile={tasteProfile} />} />
        </Routes>
        </div>

      {/* <ApiResponseDisplay /> */}



      </div>
    </Router>
  )
}

export default App
