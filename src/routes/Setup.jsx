import { useState } from 'react'


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

      console.log(games)

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
        {/* map of one?  how about no */}
        {games.map((game, index) => {
          return <div className="bg-aro-700 p-2 rounded-xl w-fit min-w-60 my-2" key={index}>{game}</div>
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
                  className='mx-2 p-2 border-2 rounded-full' 
                  onClick={addGame}
                  >
                  +
                </button>
              </form>
            </span>
    </div>
    </> 
}
