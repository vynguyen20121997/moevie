import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./style.css";
import Fab from "@mui/material/Fab";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, useNavigate } from "react-router-dom";
import { APIConfig } from "../API/APIConfig";
import Button from "@mui/material/Button";
import Loading from "../Loading/Loading";
import { ButtonContainer } from "../Button/GenresButton";
interface Movie {
  genre_ids: [number];
  name: string;
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
  loading: boolean;
  items: Movie[];
  genreData: genreData[];
};
interface genreData {
  id: number;
  name: string;
}
const HeroSlider: React.FC<PropType> = (props) => {
  const { items, loading, genreData } = props;
  const navigate = useNavigate();

  const [viewportRef, embla] = useEmblaCarousel(
    {
      align: "center",
      skipSnaps: false,
    }
    // [Autoplay()]
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
  if (loading) return <Loading />;

  return (
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
          {items.map((i, index) => {
            const genreFilter = () => {
              const result = [];
              for (const genreId of i.genre_ids) {
                const element = genreData?.find((item) => item.id === genreId);
                if (element) {
                  result.push({ name: element.name, id: element.id });
                }
              }
              return result;
            };
            const genreNames = genreFilter();
            return (
              <>
                {" "}
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
                    <div className="poster">
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
                      <h1>{i.title || i.name}</h1>

                      <div className="genre-box">
                        {genreNames?.slice(0, 4).map((item) => {
                          return (
                            <ButtonContainer
                              variant="outlined"
                              size="medium"
                              stylebutton={{
                                maxWidth: "80px",
                                fontSize: "12px",
                                maxHeight: "40px",
                                minWidth: "30px",
                                minHeight: "30px",
                                marginLeft: "2%",
                              }}
                              genre={item}
                            />
                          );
                        })}
                        <h4>{i.overview}</h4>
                      </div>
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
              </>
            );
          })}
        </div>
      </div>{" "}
      <div className="btn2">
        <Fab
          color="primary"
          onClick={scrollNext}
          // disabled={nextBtnDisabled}
        >
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
  );
};
export default HeroSlider;
