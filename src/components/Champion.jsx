import { useState } from "react";
import { Card, CardHeader, Heading } from "grommet";
import ChampionDetails from "./ChampionDetails";
import ChampionBasic from "./ChampionBasic";
import { baseURLOne, options } from "../services";

const Champion = ({ champion }) => {

  const [showDetails, setShowDetails] = useState(false);
  const [championDetails, setChampionDetails] = useState("");

  const getChampionDetails = async(championName) => {
    let formattedName = championName.replace(/'/,'-').replace(/ /, '-')
    let details = await fetch(`${baseURLOne}${formattedName}`, options)
      .then(res => res.json())
    setChampionDetails(details.champion[0])
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
    <Card animation={{ type: "fadeIn", duration: 2000}} background="light-4" onClick={handleClick}>
      <CardHeader alignSelf="center">
        <Heading level="2" margin="small">
          {champion.node.champion_name}
        </Heading>
      </CardHeader>
      {showDetails ? <ChampionDetails championLore={championDetails.lore} championTitle={championDetails.champion_title}/> 
                  : <ChampionBasic champion={champion.node} />
      } 
    </Card>
  </> );
}
 
export default Champion;