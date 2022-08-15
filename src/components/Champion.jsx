import { useState } from "react";
import { Card, CardHeader, Heading } from "grommet";
import ChampionDetails from "./ChampionDetails";
import ChampionBasic from "./ChampionBasic";

const Champion = ({ champion }) => {

  const [showDetails, setShowDetails] = useState(false);

  return (
  <>
    <Card animation={{ type: "fadeIn", duration: 2000}} background="light-4" onClick={() => showDetails ? setShowDetails(false) : setShowDetails(true)}>
      <CardHeader alignSelf="center">
        <Heading level="2" margin="small">
          {champion.node.champion_name}
        </Heading>
      </CardHeader>
      {showDetails ? <ChampionDetails champion={champion.node}/> : <ChampionBasic champion={champion.node} />} 
    </Card>
  </> );
}
 
export default Champion;