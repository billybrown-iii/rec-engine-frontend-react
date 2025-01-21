import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './routes/Home';
import Setup from './routes/Setup';
import Discover from './routes/Discover';
import Nav from './components/Nav'
import { useState } from 'react'
import { TasteProfileContext } from './TasteProfileContext';

const defaultTasteProfile = {
  books: [''],
  films: [''],
  shows: [''],
  games: [''],
}


function App() {
  // taste profile feels like context territory.
  // initialize via local stiorage (for now)
  const [tasteProfile, setTasteProfile] = useState(defaultTasteProfile);

  return (
    // XContext.Provider is a component that takes a value prop.  
    // The value prop is handed off to the XContext as the variable(s) to make available to anyone who calls useContext on XContext.
    <TasteProfileContext.Provider value={{tasteProfile, setTasteProfile}}>
      <Router>
        <div className='mobile-constrained-segment'>
          <Nav />
          <div className="p-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/setup" element={<Setup />} />
              <Route path="/discover" element={<Discover />} />
            </Routes>
          </div>
        </div>
      </Router>
    </TasteProfileContext.Provider>
  )
}

export default App
