// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Books from './setup/Books';


export default function TasteProfileSetup ({tasteProfile, setTasteProfile}) {
    // react router subroutes are probably easier, tbh.
    // /const [currentView, setCurrentView] = useState('')
    

    return <>
    <div>
        <div className="text-xl">Name some favorites pls</div>
        <Link to="/setup/books" className="btn">Books</Link>

        <Routes>
          <Route path="books" element={<Books tasteProfile={tasteProfile} setTasteProfile={setTasteProfile}/>} />
        </Routes>
    </div>
    </> 
}