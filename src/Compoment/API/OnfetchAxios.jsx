import { APIConfig } from "./APIConfig";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const OnFetchAxios = (funtion, ontionalFilter, key) => {
  ontionalFilter = ontionalFilter ?? "";
  const { isLoading, error, data } = useQuery(["list", key], () =>
    axios.get(
      `${APIConfig.baseUrl}${funtion}${APIConfig.apiKey}${ontionalFilter}`
    )
  );
  if (isLoading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error fetching genre list: {error.message}</p>;
  } else {
    return data;
  }
};
