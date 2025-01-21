import { useContext } from 'react'
import { TasteProfileContext } from '../TasteProfileContext';
import MediaTypeSublist from '../components/setup/MediaTypeSublist';




export default function Setup () {
    const { tasteProfile, setTasteProfile } = useContext(TasteProfileContext);

  return <>
    <div className="text-xl mb-2">Set up your taste profile by adding things you like.</div>
    <hr />
    <MediaTypeSublist 
      mediaType="Book" 
      tasteProfile={tasteProfile}  
      setTasteProfile={setTasteProfile} 
      preexistingMediaList={tasteProfile.books}
      />
    <MediaTypeSublist 
      mediaType="Film" 
      tasteProfile={tasteProfile}  
      setTasteProfile={setTasteProfile} 
      preexistingMediaList={tasteProfile.films}
      />
    <MediaTypeSublist
      mediaType="Show" 
      tasteProfile={tasteProfile}  
      setTasteProfile={setTasteProfile} 
      preexistingMediaList={tasteProfile.shows}
      />
    <MediaTypeSublist 
      mediaType="Game" 
      tasteProfile={tasteProfile}  
      setTasteProfile={setTasteProfile} 
      preexistingMediaList={tasteProfile.games}
      />
  </>

}
