import Champion from "./Champion";
import { Box, Grid, ResponsiveContext } from "grommet";
import { useContext } from "react";

const ChampionList = ({championList}) => {
  
  const size = useContext(ResponsiveContext);

  return ( 
    <>
      <Box>
        <Grid columns={size !== "small" ? "medium" : "large"} gap="large">
          {championList.map((champion, idx) => (
            <Champion champion={champion} key={idx} />
            ))}
        </Grid>
      </Box>
    </>
   );
}
 
export default ChampionList;