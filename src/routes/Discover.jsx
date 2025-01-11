import { useContext, useState } from "react"
import { TasteProfileContext } from "../TasteProfileContext"

import { Ring } from '@uiball/loaders';

function LoadingSpinner() {
    return <div className="w-fit mx-auto text-nosferatu-50">
        <Ring size={40} lineWeight={5} speed={2} color="white" />
      </div>
}


export default function Discover () {

    const { tasteProfile } = useContext(TasteProfileContext);
    
    console.log(tasteProfile)
        const [suggestions, setSuggestions] = useState([])
        const [selectedMediaType, setSelectedMediaType] = useState('Book');
        const [isFetching, setIsFetching] = useState(false);
       
        async function handleClick () {

          const requestBody = JSON.stringify({
            tasteProfile,
            selectedMediaType,
          });

          setIsFetching(true);

          const response = await fetch('https://localhost:7085/api/Discovery', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: requestBody,
          });

          const resolvedResponse = await response.json();

          function delayThreeSeconds() {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve(resolvedResponse);
              }, 3000);
            });
          }

          await delayThreeSeconds();

          setIsFetching(false);
          console.log('kitty')
          console.log(resolvedResponse)
          
          setSuggestions(resolvedResponse.content.split('|'));
        }
    
    return <>
        <Dropdown selectedMediaType={selectedMediaType} setSelectedMediaType={setSelectedMediaType} />

        <button className="border-2 m-2 p-3 w-fit" onClick={handleClick}>Click me</button>

        {isFetching && <LoadingSpinner />}

        {!isFetching && suggestions.map((suggestion, index) => (
          <div key={index} className="mb-2 mx-auto p-2 border-2 min-w-80 text-center w-fit rounded-xl bg-aro-800 border-aro-200">{suggestion}</div>
        ))}
    </> 
}

function Dropdown ({selectedMediaType, setSelectedMediaType}) {
    const handleChange = (event) => {
        setSelectedMediaType(event.target.value);
      };
    
      return (
        <div>
          <label htmlFor="category" className="text-gray-200 mb-2">
            Find new:
          </label>
          <select
            id="category"
            value={selectedMediaType}
            onChange={handleChange}
            className="border-2 border-gray-600 rounded-md p-2 m-2 bg-aro-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Book">Books</option>
            <option value="Film">Films</option>
            <option value="Show">Shows</option>
            <option value="Game">Games</option>
          </select>
        </div>
      );
}