import React from "react";
import "./GenresStyle.css";
import SliderContainer from "../Compoment/SmallCompoment/SliderContainer";
import { OnFetchAxios, OnFetchGenreList } from "../Compoment/API/OnfetchAxios";
import { UrlCreatingGenreAPI } from "../Compoment/API/APIServies";
import {
  genreDataType,
  genreHookObject,
} from "../Compoment/Type/InterfaceType";
const GenresPage = () => {
  const result: genreHookObject[] | null = UrlCreatingGenreAPI();
  const { data: genreListData } = OnFetchGenreList();
  const genreList: genreDataType[] = genreListData?.data.genres;
  const actionMovie = result?.find((item) => item.key === "action");
  const { data: action, isLoading: actionLoading } = OnFetchAxios(
    actionMovie ?? {
      url: "",
      key: "",
    }
  );
  const actionData = action?.data?.results;
  const adventureMovie = result?.find((item) => item.key === "adventure");
  const { data: adventure, isLoading: adventureLoading } = OnFetchAxios(
    adventureMovie ?? {
      url: "",
      key: "",
    }
  );
  const adventurenData = adventure?.data?.results;
  const animationMovie = result?.find((item) => item.key === "animation");
  const { data: animation, isLoading: animationLoading } = OnFetchAxios(
    animationMovie ?? {
      url: "",
      key: "",
    }
  );
  const animationData = animation?.data?.results;
  const crimeMovie = result?.find((item) => item.key === "crime");
  const { data: crime, isLoading: crimeLoading } = OnFetchAxios(
    crimeMovie ?? {
      url: "",
      key: "",
    }
  );
  const crimeData = crime?.data?.results;
  const horrorMovie = result?.find((item) => item.key === "horror");
  const { data: horror, isLoading: horrorLoading } = OnFetchAxios(
    horrorMovie ?? {
      url: "",
      key: "",
    }
  );
  const horrorData = horror?.data?.results;
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "4%",
      }}
    >
      <div className="genresSlider" style={{ marginTop: "1%" }}>
        <SliderContainer
          loading={actionLoading}
          items={actionData}
          movieCategoryTitle="Action"
          genreData={genreList}
        />
      </div>
      <div className="genresSlider">
        <SliderContainer
          loading={adventureLoading}
          items={adventurenData}
          movieCategoryTitle="Adventure"
          genreData={genreList}
        />
      </div>
      <div className="genresSlider">
        <SliderContainer
          loading={animationLoading}
          items={animationData}
          movieCategoryTitle="Animation"
          genreData={genreList}
        />
      </div>
      <div className="genresSlider">
        <SliderContainer
          loading={crimeLoading}
          items={crimeData}
          movieCategoryTitle="Crime"
          genreData={genreList}
        />
      </div>
      <div className="genresSlider">
        <SliderContainer
          loading={horrorLoading}
          items={horrorData}
          movieCategoryTitle="Horror"
          genreData={genreList}
        />
      </div>
    </div>
  );
};
export default GenresPage;
