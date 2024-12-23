import { useState } from 'react'
import { Trash, Plus } from 'react-feather';


export default function Setup ({setTasteProfile}) {
    // react router subroutes are probably easier, tbh.
    // /const [currentView, setCurrentView] = useState('')

    const [games, setGames] = useState([])
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

    return <>
    <div>
        <div className="text-xl">Name some favorites pls</div>
        <hr />
        
        <div className="text-lg mb-2">Games:</div>
        {/* <hr /> */}
        {games.map((game, index) => {
          return <div key={index} className="flex">
            <div className="bg-aro-700 p-3 px-4 rounded-xl w-fit min-w-60 my-2">
              {game}
            </div>
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
