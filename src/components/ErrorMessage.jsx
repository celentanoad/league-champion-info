import { Text, Box } from "grommet";

const ErrorMessage = () => {
  return ( 
    <>
    <Box background="light-4" pad="xsmall" margin="large" round="small">
      <Box border={{ color: "status-error", size: "medium" }} round="xsmall" pad="small" background="status-disabled">
        <Text size="xlarge">Unable to retrieve champion data at this time. Please try again later.</Text>
      </Box>
    </Box>
    </>
   );
}
 
export default ErrorMessage;