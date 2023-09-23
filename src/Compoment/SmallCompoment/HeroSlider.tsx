import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
  EmblaEventType,
  UseEmblaCarouselType,
} from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./style.css";
import Fab from "@mui/material/Fab";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, useNavigate } from "react-router-dom";
import { APIConfig } from "../API/APIConfig";
import Button from "@mui/material/Button";
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
}

type PropType = {
  items: Movie[];
  options?: EmblaOptionsType;
};
const HeroSlider: React.FC<PropType> = (props) => {
  const { options, items } = props;
  const navigate = useNavigate();

  const [viewportRef, embla] = useEmblaCarousel(
    {
      align: "center",
      skipSnaps: false,
    },
    [Autoplay()]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<Array<number>>([]);
  // const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  const onSelectButton = useCallback((embla: EmblaCarouselType) => {
    setPrevBtnDisabled(!embla.canScrollPrev());
    setNextBtnDisabled(!embla.canScrollNext());
  }, []);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
    onSelectButton(embla);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className="App">
      <div className="embla">
        <div className="btn1">
          <Fab
            onClick={scrollPrev}
            // disabled={prevBtnDisabled}
            color="primary"
          >
            <ChevronLeftIcon fontSize="large" />
          </Fab>
        </div>
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {items.map((i, index) => (
              <div
                className="embla__slide"
                key={index}
                style={{
                  backgroundImage: `url(${APIConfig.originalImage(
                    i.backdrop_path
                  )})`,
                }}
              >
                <div className="embla__slide__inner">
                  <div
                    className="poster"
                    style={{ marginTop: "10%", position: "relative" }}
                  >
                    <Link to={`/movies/${i.id}`}>
                      <img
                        onClick={() => {
                          navigate(`/movies/${i.id}`);
                        }}
                        src={APIConfig.w300Image(i.poster_path)}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="info">
                    <h1>{i.title}</h1>
                    <h4>{i.overview}</h4>
                    <div className="btn">
                      <Button
                        onClick={() => {
                          navigate(`/movies/${i.id}`);
                        }}
                        size="large"
                        variant="contained"
                      >
                        WATCH NOW
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
        <div className="btn2">
          <Fab color="primary" onClick={scrollNext} disabled={nextBtnDisabled}>
            <ChevronRightIcon fontSize="large" />
          </Fab>
        </div>
        <div className="embla__navigator">
          {scrollSnaps.map((_, index) => (
            <div
              className="embla__dots"
              key={index}
              style={{
                backgroundColor:
                  selectedIndex === index ? "lightblue" : "lightgray",
              }}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HeroSlider;
