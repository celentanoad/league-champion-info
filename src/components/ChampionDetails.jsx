import { CardBody, Box, Heading, Text } from "grommet";

const ChampionDetails = ({championLore, championTitle}) => {


  return ( 
    <>
       <CardBody margin="small" animation={{ type: "fadeIn", duration: 2000}} >
        <Box margin="none" align="center" animation={{type: "fadeIn", delay: 500, duration: 2000}}>
          <Heading margin={{bottom: "medium"}} level="3">{championTitle}</Heading>
        </Box>
        <Box align="start" background="dark-2" round="small" animation={[{type: "slideUp", delay: 1000}, {type: "fadeIn", delay: 500, duration: 2000}]}>
          <Heading level="3" margin={{left: "small", bottom: "none", top: "none"}}> Champion Lore: </Heading>
          <Text margin="small">{championLore}</Text>
        </Box>
      </CardBody>
    </>
   );
}
 
export default ChampionDetails;