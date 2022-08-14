import { useState } from "react";
import { Box, Form, RadioButtonGroup, Select, FormField, Button } from "grommet";

const Search = ({ getChampionList }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("")
  const [selectedRole, setSelectedRole] = useState("")

  const difficultyOptions = [
    {label: "Easy", value: "easy"},
    {label: "Medium", value: "medium"},
    {label: "Hard", value: "hard"}
  ];

  const roleOptions = ["Assassin", "Fighter", "Mage", "Marksman", "Support", "Tank"]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedDifficulty && selectedRole) {
      getChampionList(selectedDifficulty, selectedRole)
    } else {
      console.log("error")
      // set error messages to tell user to select these options
    }
  }

  return ( 
    <>
      <Box flex={true} direction="row" justify="center" border={{color: "accent-4", size: "medium"}} alignContent="center" gap="medium" pad="small" margin="small">
        <Form onSubmit={handleSubmit}>
          <FormField label="Select Champion Difficulty" name="difficulty">
            <RadioButtonGroup
              margin={{top: "small"}}
              direction="row"
              name="difficulty"
              options={difficultyOptions}
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            />
          </FormField>
          <FormField label="Select Champion Role" name="role">
            <Select
              a11yTitle="Champion Role Selection"
              id="role"
              name="role"
              options={roleOptions}
              value={selectedRole}
              onChange={({option}) => setSelectedRole(option)}
            >
            </Select>
          </FormField>
          <Box align="center">
            <Button type="submit" label="Search" />
          </Box>
        </Form>
      </Box>
    </>
   );
}
 
export default Search;