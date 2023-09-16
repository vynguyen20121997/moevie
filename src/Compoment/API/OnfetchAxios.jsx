import { APIConfig } from "./APIConfig";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const OnFetchAxios = (funtion, ontionalFilter, key) => {
  ontionalFilter = ontionalFilter ?? "";
  // console.log(
  //   "fulllink",
  //   `${APIConfig.baseUrl}${funtion}${APIConfig.apiKey}${ontionalFilter}`
  // );
  const { isLoading, error, data } = useQuery(["list", key], () =>
    axios.get(
      `${APIConfig.baseUrl}${funtion}${APIConfig.apiKey}${ontionalFilter}`
    )
  );
  if (isLoading) {
    // console.log("loading");
    return <p>Loading...</p>;
  } else if (error) {
    // console.log("loi", error);
    return <p>Error fetching genre list: {error.message}</p>;
  } else {
    return data;
    // console.log("data", data);
  }
};
