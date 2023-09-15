import { APIConfig } from "../Compoment/API/APIConfig";
import { useQuery, useQueryClient, getQueryData } from "@tanstack/react-query";
import React from "react";
import tmdbAPI from "../Compoment/API/tmdbAPI";
import axios from "axios";
import useGenreList from "../Compoment/Data-Hooks/GenresListHooks";

export const Testings = () => {
  const { data } = useGenreList();
  console.log("nhận về:", data);

  return <div></div>;
};
// };
