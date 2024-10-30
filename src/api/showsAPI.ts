export const getTvShows = async (name: string) => {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`);
  return response.json();
};

export const getActiveTvShow = async (id: number | null) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  return response.json();
};
