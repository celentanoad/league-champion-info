import { useState } from 'react';
import {baseURL, options} from './services';
import './App.css';
import Search from './components/Search';
import ChampionList from './components/ChampionList';

function App() {

  const [championList, setChampionList] = useState(null);

  const getChampionList = async (difficulty, role) => {
    let results = await fetch(`${baseURL}&role=${role}`, options)
      .then(res => res.json())
      .catch(err => console.error(err))
      // still need to test catch block
    // filter results based on difficulty
    setChampionList(results.champions)
  }

  return (
    <div className="App">
      <header>
        <p>
          League of Legends Champion Finder
        </p>
      </header>
      <h1>
        Search for a Champion
      </h1>
      <Search getChampionList={getChampionList}/>
      {championList && <ChampionList championList={championList}/>}
    </div>
  );
}

export default App;
