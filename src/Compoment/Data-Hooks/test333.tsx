import { useContext } from "react";
import { GenreListContext } from "../../App";
interface genreDataType {
  id: number;
  name: string;
}
const MyOtherComponent = () => {
  const genreList: any = useContext(GenreListContext);
  const genreData: genreDataType[] = genreList?.genres;
  return (
    <>
      <ul>
        {genreData &&
          genreData.map((item: genreDataType) => {
            return <li key={item.id}>{item.name}</li>;
          })}
      </ul>
    </>
  );
};
export default MyOtherComponent;
