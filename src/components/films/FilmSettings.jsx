import { useState } from 'react';

// todo init settings from local storage
export default function FilmSettings ({settings, setSettings}) {
  const [genre, setGenre] = useState('All');
  const [qualitiesText, setQualitiesText] = useState('');

  function handleChangedGenre (event) {
    setGenre(event.target.value);

    setSettings(priorSettings => {
      return {
        ...priorSettings,
        genre: event.target.value,
      }
    })
  }

  function handleChangedQualities (event) {
    setQualitiesText(event.target.value);

    setSettings(priorSettings => {
      return {
        ...priorSettings,
        qualities: event.target.value,
      }
    });
  }

  return <>
    <div>
      <label htmlFor="genre" className="mb-2">
        Genre
      </label>
      <select
        id="genre"
        value={genre}
        onChange={handleChangedGenre}
        className="border-2 border-gray-600 rounded-md p-2 m-2 bg-aro-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All</option>
        <option value="Comedy">Comedy</option>
        <option value="Horror">Horror</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Fantasy">Fantasy</option>
      </select>
    </div>

    <div>
      <label
        htmlFor="qualities"
        className="mb-2"
      >
        Qualities / Characteristics
      </label>

      <div className="text-xs text-gray-400 mb-2">
        You can use keywords or full sentences.  e.g. &quot;zombies&quot; or &quot;something set in 19th-century Europe&quot;
      </div>

      <textarea
        id="qualities"
        className="w-3/4 border-2 border-gray-600 rounded-md p-2 m-2 bg-aro-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={qualitiesText}
        onChange={handleChangedQualities}
        // placeholder="Hint:  You can use keywords or full sentences.  e.g. &quot;zombies&quot; or &quot;something set in 19th-century Europe&quot;"
      ></textarea>
    </div>

  </>
}