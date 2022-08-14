import { useState } from 'react';
import {baseURL, options} from './services';
import './App.css';
import { Grommet, Box } from 'grommet';
import Search from './components/Search';
import ChampionList from './components/ChampionList';

const jsonResponse = [
  {node : {
    champion_name: "Aatrox",
    champion_splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    recommended_roles: ["Fighter", "Tank"],
    difficulty: 4
  }},
  {node : {
    champion_name: "Aatrox",
    champion_splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    recommended_roles: ["Fighter", "Tank"],
    difficulty: 4
  }},
  {node : {
    champion_name: "Aatrox",
    champion_splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    recommended_roles: ["Fighter", "Tank"],
    difficulty: 4
  }},
  {node : {
    champion_name: "Aatrox",
    champion_splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    recommended_roles: ["Fighter", "Tank"],
    difficulty: 4
  }},
  {node : {
    champion_name: "Aatrox",
    champion_splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    recommended_roles: ["Fighter", "Tank"],
    difficulty: 4
  }},
  {node : {
    champion_name: "Aatrox",
    champion_splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    recommended_roles: ["Fighter", "Tank"],
    difficulty: 4
  }},
  {node : {
    champion_name: "Aatrox",
    champion_splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    recommended_roles: ["Fighter", "Tank"],
    difficulty: 4
  }},
  {node : {
    champion_name: "Aatrox",
    champion_splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    recommended_roles: ["Fighter", "Tank"],
    difficulty: 4
  }},
  {node : {
    champion_name: "Aatrox",
    champion_splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    recommended_roles: ["Fighter", "Tank"],
    difficulty: 4
  }},
  {node : {
    champion_name: "Aatrox",
    champion_splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    recommended_roles: ["Fighter", "Tank"],
    difficulty: 4
  }}
]

function App() {

  const [championList, setChampionList] = useState(jsonResponse);


  const getChampionList = async (difficulty, role) => {
    let results = await fetch(`${baseURL}&role=${role}`, options)
      .then(res => res.json())
      .catch(err => console.error(err))
      // still need to test catch block
    // filter results based on difficulty
    setChampionList(results.champions)
  }

  return (
    <Grommet plain>
      <Box pad="medium">
        <header>
          <p>
            League of Legends Champion Finder
          </p>
        </header>
        <h1>
          Search for a Champion
        </h1>
        <Box direction="column" align="center">
          <Search getChampionList={getChampionList}/>
          {championList && <ChampionList championList={championList}/>}
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
