export type TvShow = {
  show: {
    id: number;
    name: string;
    genres: string[];
    status: string;
    officialSite: string;
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    rating: {
      average: number;
    };
  };
};
export type activeShow = {
  id: number;
  name: string;
  genres: string[];
  status: string;
  officialSite: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  rating: {
    average: number;
  };
};
