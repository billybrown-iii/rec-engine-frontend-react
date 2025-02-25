import { useState } from 'react';
import FilmSettings from './FilmSettings';
import DiscoverButton from '../DiscoverButton';
import LoadingSpinner from '../LoadingSpinner';


function SuggestionsDisplay ({suggestions}) {
  return <div>
    {/* each suggestion has a "title" property and a "synopsis" property */}
    {suggestions.map((suggestion, index) => (
      <div key={index} className="mb-2 mx-auto p-2 border-2 min-w-80 text-center w-fit rounded-xl bg-aro-800 border-aro-200">
        <h3>{suggestion.title}</h3>
        <p>{suggestion.synopsis}</p>
      </div>
    ))}
  </div>
}



// if the process for fetching suggestions is generic, then maybe you don't need app-level context.
// when "films" component first loads (if settings is undefined), fetch it from local browser storage
// "films" settings are scoped to "films" component
// it passes its settings to the generic fetchSuggestions service.
export default function DiscoverFilms () {
  const [settings, setSettings] = useState({mediaType: 'Film'});
  const [isFetching, setIsFetching] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  async function fetchSuggestions () {
    console.log('fetching suggestions...')
    setIsFetching(true);

    const requestBody = JSON.stringify({discoverySettings: settings});

      const response = await fetch('https://localhost:7085/api/Discovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: requestBody,
      });

    const resolvedResponse = await response.json();

    console.log(resolvedResponse)

    const suggestedFilms = JSON.parse(resolvedResponse.content);
    
    setSuggestions(suggestedFilms);

    // setSuggestions(resolvedResponse.content.split('|'));

    // fetch suggestions
    setIsFetching(false);
  }


  return <>
    <FilmSettings settings={settings} setSettings={setSettings} />
    <DiscoverButton handleClick={fetchSuggestions} />

    {isFetching && <LoadingSpinner />}
    {!isFetching && <SuggestionsDisplay suggestions={suggestions} />}
  </>
}