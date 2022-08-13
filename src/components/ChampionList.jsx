import Champion from "./Champion";

const ChampionList = ({championList}) => {
  return ( 
    <>
      List of Champions
      {championList.map((champion, idx) => (
        <Champion champion={champion} key={idx}/>
      ))}
    </>
   );
}
 
export default ChampionList;