import Search from "../search/Search";
// import { TvContext } from "../context/constext";

const HomePage: React.FC = () => {
  // const {
  //   activeTvShaw,
  //   activeTvShowErr,
  //   activeIsLoading,
  //   tvShows,
  //   tvShowsErr,
  //   tvShowsIsLoading,
  // } = useContext(TvContext);

  return (
    <main className="d-flex flex-column justify-content-center align-items-center">
      <div className="text-light text-center">
        <h1 className="mb-3">Find Your Next Show</h1>
        <p className="pb-2 text-gray fw-bold">
          Welcome to TVsFlix, Search with the name and get the info
        </p>
      </div>
      <Search />
    </main>
  );
};

export default HomePage;
