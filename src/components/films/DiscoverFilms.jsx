import { useState } from 'react';
import FilmSettings from './FilmSettings';
import DiscoverButton from '../DiscoverButton';
import LoadingSpinner from '../LoadingSpinner';


function SuggestionsDisplay ({suggestions}) {
  return <div>[Suggestions go here]</div>
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
    setIsFetching(true);

    const requestBody = JSON.stringify(settings);

      const response = await fetch('https://localhost:7085/api/Discovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: requestBody,
      });

    const resolvedResponse = await response.json();

    console.log(resolvedResponse)
          
    setSuggestions(resolvedResponse.content.split('|'));

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