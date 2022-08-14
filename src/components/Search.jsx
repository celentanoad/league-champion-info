import { useState } from "react";
import { Box, Form, RadioButtonGroup, Select, FormField, Button } from "grommet";

const Search = ({ getChampionList }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("")
  const [selectedRole, setSelectedRole] = useState("")

  const difficultyOptions = [
    {label: "1", value: "1"},
    {label: "2", value: "2"},
    {label: "3", value: "3"},
    {label: "4", value: "4"},
  ];

  // const roleOptions = [
  //   {label: "Assassin", value: "assassin"},
  //   {label: "Figher", value: "fighter"},
  //   {label: "Mage", value: "mage"},
  //   {label: "Marksman", value: "marksman"},
  //   {label: "Support", value: "support"},
  //   {label: "Tank", value: "tank"}
  // ];

  const roleOptions = ["Assassin", "Fighter", "Mage", "Marksman", "Support", "Tank"]

  // const handleDifficultyChange = (e) => {
  //   setSelectedDifficulty(e.target.value)
  // }

  // const handleRoleChange = (e) => {
  //   setSelectedRole(e.target.value)
  // }

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
      <Box flex={true} direction="row" justify="center" alignContent="center" height="xsmall" gap="medium" pad="large">
        <Form onSubmit={handleSubmit}>
          <FormField label="Select Champion Difficulty" name="difficulty">
            <RadioButtonGroup 
              direction="row"
              name="difficulty"
              options={difficultyOptions}
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            />
          </FormField>
          <FormField label="Select Champion Role" name="role">
            <Select
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