import { useState, useContext, useEffect } from 'react'
import { Trash, Plus } from 'react-feather';
import { TasteProfileContext } from '..//TasteProfileContext';


function SetupMediaType ({ preexistingMediaList, mediaType, setTasteProfile }) {
  // I think I'll just use mini component state, and useEffect to update the global config.
  // this way the code reads pretty simply, and I'm not digging thru the object tree all over the place.

  // TODO set its initial value to [''];
  const [mediaList, setMediaList] = useState(preexistingMediaList);

  function updateMediaListItem (newValue, indexToUpdate) {
    const updatedMediaList = mediaList.map((mediaListItem, index) => {
      if (index === indexToUpdate) {
        return newValue;
      }
      return mediaListItem;
    })

    setMediaList(updatedMediaList);
  }

  function deleteMediaListItem (indexToDelete) {
    if (mediaList.length === 1) {
      return;
    }

    const updatedMediaList = mediaList.filter((x, index) => index !== indexToDelete);

    setMediaList(updatedMediaList);
  }

  function addNewMediaListItem () {
    if (mediaList.includes('')) {
      return alert('Please populate blank items before adding new ones.')
    }

    const updatedMediaList = [...mediaList, ''];

    setMediaList(updatedMediaList);
  }

// useEffect:  on changes to mediaList, call setTasteProfile
  useEffect(() => {
    setTasteProfile(tasteProfile => {
      return {
        ...tasteProfile,
        [mediaType.toLowerCase() + 's']: mediaList,
      }
    })
  }, [mediaList, mediaType, setTasteProfile])
  


  return <>
    <div>
        <div className="text-xl mb-2">Set up your taste profile by adding things you like.</div>
        <hr />
        
        <div className="text-lg mb-2">{mediaType}s:</div>
        {mediaList.map((mediaListItem, index) => {
          return <div key={index} className="flex  mb-3">
                <input 
                  type="text"
                  value={mediaListItem}
                  onChange={e => updateMediaListItem(e.target.value, index)}
                  className = 'bg-aro-700 p-2 rounded-xl w-fit min-w-60'
                  />
              <button 
                className='mx-2 my-auto p-2 h-fit border-2 rounded-xl' 
                onClick={() => deleteMediaListItem(index)}
                >
                <Trash size={16} className='text-nosferatu-50' />
              </button>
              
          </div> 
        })}
        {/* TODO on key press enter, add new one */}
        {/* Also, auto text focus the newly added one */}
        <div>
            <button 
              type="submit" 
              className='mx-2 my-auto p-2 h-fit border-2 rounded-xl' 
              onClick={addNewMediaListItem}
              >
              <Plus size={16} className='text-nosferatu-50' />
            </button>
        </div>
    </div>
  </> 
}

export default function Setup () {
    const { tasteProfile, setTasteProfile } = useContext(TasteProfileContext);

  return <>
    <SetupMediaType 
      mediaType="Game" 
      tasteProfile={tasteProfile}  
      setTasteProfile={setTasteProfile} 
      preexistingMediaList={tasteProfile.games}
      />
  </>

}
