import { useState } from "react";
import { Card, CardHeader, Heading, CardBody } from "grommet";
import ChampionDetails from "./ChampionDetails";
import ChampionBasic from "./ChampionBasic";
import { baseURLOne, options } from "../services";

const Champion = ({ champion }) => {

  const [showDetails, setShowDetails] = useState(false);
  const [championDetails, setChampionDetails] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleErrors = (response) => {
    if (!response.ok) throw Error(response.statusText)
    return response;
  }

  const getChampionDetails = async(championName) => {
    setHasError(false)
    let formattedName = championName.replace(/'/,'-').replace(/ /, '-')
    let details = await fetch(`${baseURLOne}${formattedName}`, options)
      .then(handleErrors)
      .then(res => res.json())
      .catch(err => {
        setHasError(true)
      });

    if (details) setChampionDetails(details.champion[0])
  }

  const handleClick = () => {
    if (showDetails) setShowDetails(false);
    else {
      if (!championDetails) getChampionDetails(champion.node.champion_name);
      setShowDetails(true)
    }
  }

  return (
  <>
    <Card animation={{ type: "fadeIn", duration: 2000}} background="light-4" onClick={handleClick} >
      <CardHeader alignSelf="center">
        <Heading level="2" margin="small">
          {champion.node.champion_name}
        </Heading>
      </CardHeader>
      {showDetails ? 
        <ChampionDetails error={hasError} championLore={championDetails.lore} championTitle={championDetails.champion_title}/> 
        : 
        <ChampionBasic champion={champion.node} />
      } 
    </Card>
  </> );
}
 
export default Champion;