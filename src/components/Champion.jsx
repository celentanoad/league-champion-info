import { Card, CardBody, CardHeader, Image } from "grommet";

const Champion = ({champion}) => {
  return (
  <>
    <Card>
      <CardHeader>{champion.node.champion_name}</CardHeader>
      <CardBody>
        <Image alt={champion.node.champion_name} src={champion.node.champion_splash} />
      </CardBody>
    </Card>
  </> );
}
 
export default Champion;