export interface genreDataType {
  id: number;
  name: string;
}
export interface Movie {
  name: string;
  id: number;
  title: string;
  original_title?: string;
  overview?: string;
  poster_path: string;
  backdrop_path?: string;
  vote_count?: number;
  vote_average: number;
  release_date: string;
  popularity?: number;
  genre_ids: number[];
}
export interface genreData {
  id: number;
  name: string;
}
export interface MovieItem {
  name: string;
  id: number;
  title?: string;
  poster_path: string;
  quantity?: number;
}
export interface movieObject {
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
  original_language: string;
  imdb_id: string;
  runtime: number;
  name: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  production_countries: [{ name: string }];
}
export interface creditObject {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}
export interface MovieObject {
  vote_average: number;
  title: string;
  release_date: string;
  id: number;
  poster_path: string;
  genre_ids: number[];
  name: string;
}
export interface MovieObjectForApp {
  vote_average: number;
  title: string;
  release_date: string;
  id: number;
  poster_path: string;
  genre_ids: number[];
  name: string;
}
export type AddToSaveType = ({
  vote_average,
  title,
  release_date,
  id,
  poster_path,
  genre_ids,
  name,
}: MovieObject) => void;
export interface genreHookObject {
  url: string;
  key: string;
}
