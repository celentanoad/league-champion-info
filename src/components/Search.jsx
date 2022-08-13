import { useState } from "react";

const Search = ({ getChampionList }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("") // would it be better to have a default value?
  const [selectedRole, setSelectedRole] = useState("")

  const handleDifficultyChange = (e) => {
    setSelectedDifficulty(e.target.value)
  }

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value)
  }

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
      <form onSubmit={handleSubmit}>
        <label>Difficulty</label>
        <select defaultValue="" name="difficulty" id="difficulty" onChange={handleDifficultyChange}>
          <option value="" disabled>Select a Difficulty</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label>Role</label>
        <select defaultValue="" name="role" id="role" onChange={handleRoleChange}>
          <option value="" disabled>Select a Role</option>
          <option value="assassin">Assassin</option>
          <option value="fighter">Figher</option>
          <option value="mage">Mage</option>
          <option value="marksman">Marksman</option>
          <option value="support">Support</option>
          <option value="tank">Tank</option>
        </select>
        <input type="submit" value="Search" />
      </form>
    </>
   );
}
 
export default Search;