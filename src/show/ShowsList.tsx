import { useTv } from "../context/constext";
import Loader from "../utilities/loader";
import ShowItem from "./ShowItem";

const ShowsList = () => {
  const { tvShows, showsLoading } = useTv();
  return (
    <section className="sh-list bg-dark overflow-auto">
      <div className="container py-5">
        <div className="row row-gap-4">
          {showsLoading && (
            <div className="col-full load">
              <Loader />
            </div>
          )}

          {!showsLoading && (!tvShows || tvShows.length === 0) && (
            <div className="col-full notfound py-5 ">
              <h2 className="text-center text-primary">No Shows Found</h2>
            </div>
          )}
          {tvShows?.map((show) => (
            <div
              key={show.show.id}
              className="col-12 col-sm-6 col-md-3 large-5-col"
            >
              <ShowItem show={show.show} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowsList;
