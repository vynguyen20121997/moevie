import React, { useState, useEffect } from "react";
import { APIConfig } from "../API/APIConfig";

export const OnfetchDataById = (id) => {
  const [credit, setCredit] = useState([]);

  const OnFetchDataList = () => {
    const urlLink = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIConfig.apiKey}`;
    fetch(urlLink)
      .then((response) => response.json())
      .then((data) => {
        setCredit(data.cast);
      });
  };
  useEffect(() => {
    OnFetchDataList();
  }, []);
  console.log("truyendi", credit);

  return <>{JSON.stringify(credit)}</>;
};
