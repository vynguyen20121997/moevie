import { APIConfig } from "../Compoment/API/APIConfig";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import tmdbAPI from "../Compoment/API/tmdbAPI";
import axios from "axios";

export const Testing = () => {
  const queryClient = useQueryClient();

  const genreList = queryClient.getQueryData("genreList");
  console.log("nhận về:", genreList);

  return (
    // <ul style={{ color: "white" }}>
    //   {data &&
    //     data.map((genre) => (
    //       <li style={{ color: "white" }} key={genre.id}>
    //         {genre.name}
    //       </li>
    //     ))}
    // </ul>
    <div></div>
  );
};
// };
