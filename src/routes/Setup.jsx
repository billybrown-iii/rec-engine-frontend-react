import { useState, useContext } from 'react'
import { Trash, Plus } from 'react-feather';
import { TasteProfileContext } from '..//TasteProfileContext';


export default function Setup () {
    // react router subroutes are probably easier, tbh.
    // /const [currentView, setCurrentView] = useState('')
    const { tasteProfile, setTasteProfile } = useContext(TasteProfileContext);

    // why have this in state?  just use the context value.
    const [games, setGames] = useState(tasteProfile.games ?? [])
    const [nextGame, setNextGame] = useState('')

    function addGame(e) {
      e.preventDefault();
      // console.log('add game')

      const updatedGames = [...games, nextGame]

      setGames(updatedGames);
      setNextGame('');

      console.log(updatedGames)

      setTasteProfile(tasteProfile => {
        return {
          ...tasteProfile,
          games: updatedGames,
        }
      })
    }

    const deleteGame = game => {
      const updatedGames = games.filter(x => x !== game);
      console.log(updatedGames)

      setGames(updatedGames);
      setTasteProfile(tasteProfile => {
        return {
          ...tasteProfile,
          games: updatedGames,
        }
      })
    }

    const updateGame = (newValue, indexToUpdate) => {
      // const affectedGame = games[indexToUpdate];

      const updatedGames = games.map((game, index) => {
        if (index === indexToUpdate) {
          return newValue;
        }
        return game;
      })

      setGames(updatedGames)
      setTasteProfile(tasteProfile => {
        return {
          ...tasteProfile,
          games: updatedGames,
        }
      })
    }

    return <>
    <div>
        <div className="text-xl">Name some favorites pls</div>
        <hr />
        
        <div className="text-lg mb-2">Games:</div>
        {/* <hr /> */}
        {games.map((game, index) => {
          return <div key={index} className="flex  mb-3">
                <input 
                  type="text"
                  value={game}
                  onChange={e => updateGame(e.target.value, index)}
                  className = 'bg-aro-700 p-2 rounded-xl w-fit min-w-60'
                  />
            {/* <div> */}
              <button 
                className='mx-2 my-auto p-2 h-fit border-2 rounded-xl' 
                onClick={() => deleteGame(game)}
                >
                <Trash size={16} className='text-nosferatu-50' />
              </button>
              
            {/* </div> */}
          </div> 
        })}
        <span>
              <form onSubmit={addGame}>
                <input 
                  type="text"
                  value={nextGame}
                  onChange={e => setNextGame(e.target.value)}
                  className = 'bg-aro-700 p-2 rounded-xl w-fit min-w-60'
                  />
                <button 
                  type="submit" 
                  className='mx-2 my-auto p-2 h-fit border-2 rounded-xl' 
                  onClick={addGame}
                  >
                  <Plus size={16} className='text-nosferatu-50' />
                </button>
              </form>
            </span>
    </div>
    </> 
}
