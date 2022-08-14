import { Card, CardBody, CardHeader, Image, Heading, Box } from "grommet";

const Champion = ({ champion }) => {

  const getRecommendedRoles = (rolesArray) => {
    let rolesList = rolesArray.join(", ");
    return rolesList
  }

  return (
  <>
    <Card animation={{ type: "fadeIn", duration: 2000}} background="light-4">
      <CardHeader alignSelf="center">
        <Heading level="2" margin="small">
          {champion.node.champion_name}
        </Heading>
      </CardHeader>
      <CardBody margin="medium">
        <Image alt={champion.node.champion_name} src={champion.node.champion_splash} />
        <Box direction="row" justify="center">
          <Heading level="3" margin="small"> Recommended Roles: </Heading>
          <Heading level="3" margin="small">{getRecommendedRoles(champion.node.recommended_roles)}</Heading>
        </Box>
        <Box align="end">
          <Heading level="3" margin="small"> Difficulty: {champion.node.difficulty}</Heading>
        </Box>
      </CardBody>
    </Card>
  </> );
}
 
export default Champion;