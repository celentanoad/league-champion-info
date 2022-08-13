import Champion from "./Champion";

const ChampionList = ({championList}) => {
  return ( 
    <>
          {championList.map((champion, idx) => (
            <Champion champion={champion} key={idx}/>
          ))}
    </>
   );
}
 
export default ChampionList;