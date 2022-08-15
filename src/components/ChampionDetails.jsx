import { CardBody, Box, Heading } from "grommet";

// import { baseURLOne } from "../services";

const ChampionDetails = ({champion}) => {


  return ( 
    <>
       <CardBody margin="medium" animation={{ type: "fadeIn", duration: 2000}}>
        <Box direction="row" justify="center">

        </Box>
        <Box align="end">
          <Heading level="3" margin="small"> Difficulty: {champion.difficulty}</Heading>
        </Box>
      </CardBody>
    </>
   );
}
 
export default ChampionDetails;