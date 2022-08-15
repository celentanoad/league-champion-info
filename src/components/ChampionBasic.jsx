import { Heading, CardBody, Image, Box } from "grommet";

const ChampionBasic = ({ champion }) => {

  const getRecommendedRoles = (rolesArray) => {
    let rolesList = rolesArray.join(", ");
    return rolesList;
  }

  return ( 
    <>
      <CardBody margin="medium" animation={{ type: "fadeIn", duration: 2000 }}>
        <Image alt={champion.champion_name} src={champion.champion_splash} />
        <Box direction="row" justify="center">
          <Heading level="3" margin="small">Recommended Roles: </Heading>
          <Heading level="3" margin="small">{getRecommendedRoles(champion.recommended_roles)}</Heading>
        </Box>
        <Box align="end">
          <Heading level="3" margin="small">Difficulty: {champion.difficulty}</Heading>
        </Box>
      </CardBody>
    </>
   );
}
 
export default ChampionBasic;