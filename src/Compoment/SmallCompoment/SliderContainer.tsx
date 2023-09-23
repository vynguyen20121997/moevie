import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
  EmblaEventType,
  UseEmblaCarouselType,
} from "embla-carousel-react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, useNavigate } from "react-router-dom";
import { APIConfig } from "../API/APIConfig";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import type * as CSS from "csstype";
import useGenreList from "../Data-Hooks/GenresListHooks";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./style2.css";
import CardContainer from "./MovieCardContainer";
export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_count: number;
  vote_average: number;
  release_date: string;
  popularity: number;
  genre_ids: [number];
}

type PropType = {
  items: Movie[];
  options?: EmblaOptionsType;
  movieCategoryTitle: string;
};
const SliderContainer: React.FC<PropType> = (props) => {
  const { options, items, movieCategoryTitle } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options
    //  [Autoplay()]
  );
  const { data: genreList } = useGenreList();

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    // const { autoplay } = emblaApi.plugins();
    //   if (!autoplay) return;
    //   if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onButtonClick);

  return (
    <>
      <div className="button1">
        <div className="left">
          <Button
            variant="outlined"
            sx={{
              borderBottomLeftRadius: "15px",
              borderTopLeftRadius: "15px",
              margin: "0",
            }}
          >
            <h3 style={{ margin: "0", padding: "0 50px" }}>
              {movieCategoryTitle}
            </h3>
          </Button>
          <Button>
            See all
            <NavigateNextIcon />
          </Button>
        </div>

        <div className="right">
          <Button onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
            <ArrowBackIosNewIcon />
          </Button>
          <Button onClick={onNextButtonClick} disabled={nextBtnDisabled}>
            <ArrowForwardIosOutlinedIcon />
          </Button>
        </div>
      </div>

      <div className="embla_slider">
        <div className="embla__viewport_slider" ref={emblaRef}>
          <div className="embla__container_slider">
            {items?.map((item, index) => {
              return <CardContainer movieDetail={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderContainer;

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};
