import { useState } from 'react';
import {baseURLAll, options, getAllChampions} from './services';
import './App.css';
import { Grommet, Box, Spinner, Header, Heading, Image } from 'grommet';
import Search from './components/Search';
import ChampionList from './components/ChampionList';
import ErrorMessage from './components/ErrorMessage';
import theme from './theme'
import logo from './assets/logoHeader.png'
// import apiHook from "./hooks/apiHook";

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

  const [championList, setChampionList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getDifficultyRange = (difficulty) => {
    if (difficulty === "easy") return [1, 3];
    else if (difficulty === "medium") return [4, 6];
    else return [7, 10];
  }

  const handleErrors = (response) => {
    if (!response.ok) throw Error(response.statusText)
    return response;
  }

  const getChampionList = async (difficulty, role) => {
    setHasError(false)
    setIsLoading(true)
    setChampionList()
    let results = await fetch(`${baseURLAll}${role}`, options)
      .then(handleErrors)
      .then(res => res.json())
      .catch(err => {
        console.error(err)
        setHasError(true)
        setIsLoading(false)
      })

    if (results) {
      let difficultyRange = getDifficultyRange(difficulty)
      let champions = results.champions.filter(
        champion => champion.node.difficulty >= difficultyRange[0] && champion.node.difficulty <= difficultyRange[1]
      )
      setChampionList(champions)
      setIsLoading(false)
    }
  }

  return (
    <Grommet theme={theme} background="neutral-3" full>
      <Header flex={true} pad="small" justify="around" background="light-4">
        <Box width="small">
          <Image fill={true} alt="League of Legends Logo" src={logo}/>
        </Box>
        <Heading level="1">Champion Finder</Heading>
      </Header>
      <Box pad="medium">
        <Heading level="2" alignSelf="center" margin={{bottom: "none"}}>
          Search for a Champion
        </Heading>
        <Box direction="column" align="center">
          <Search getChampionList={getChampionList}/>
          {isLoading && <Spinner />}
          {championList && <ChampionList championList={championList}/>}
          {hasError && <ErrorMessage />}
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
