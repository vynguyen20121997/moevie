import { APIConfig } from "./APIConfig";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface OnFetchAxiosOptions {
  url: string;
  key: string;
}

export const OnFetchAxios = ({ url, key }: OnFetchAxiosOptions) => {
  return useQuery(["list", key], () => axios.get(url));
};
