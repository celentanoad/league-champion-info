import Champion from "./Champion";
import { Box, Grid, ResponsiveContext } from "grommet";
import { useContext } from "react";

const ChampionList = ({championList}) => {
  
  const size = useContext(ResponsiveContext);

  return ( 
    <>
      <Box pad="medium" margin="none">
        <Grid columns={size !== "small" && championList.length > 1 ? "medium" : "large"} gap="xlarge">
          {championList.map((champion, idx) => (
            <Champion champion={champion} key={idx} />
            ))}
        </Grid>
      </Box>
    </>
   );
}
 
export default ChampionList;