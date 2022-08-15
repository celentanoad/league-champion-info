import Champion from "./Champion";
import { Box, Grid, ResponsiveContext } from "grommet";
import { useContext } from "react";

const ChampionList = ({championList}) => {
  
  const screenSize = useContext(ResponsiveContext);

  return ( 
    <>
      <Box pad="medium" margin="none">
        <Grid columns={screenSize === "large"  ? {count: 2, size: 'auto'} : {count: 1, size: 'auto'}} gap="xlarge">
          {championList.map((champion, idx) => (
            <Champion champion={champion} key={idx} />
            ))}
        </Grid>
      </Box>
    </>
   );
}
 
export default ChampionList;