import { useParams } from "react-router";
import { useEffect } from "react";
import Loader from "../utilities/loader";
import noImag from "../assets/images/no-img.png";
import { useTv } from "../context/constext";

const Show = () => {
  const { searchActiveShow, ActiveShowLoading, activeShow } = useTv();
  const params = useParams();

  useEffect(() => {
    if (params.id && !activeShow) searchActiveShow(+params.id);
  }, [params.id]);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row pt-5">
          {ActiveShowLoading && (
            <div className="col-full">
              <Loader />
            </div>
          )}
        </div>
        <div className="row pt-5">
          {!ActiveShowLoading && !activeShow && (
            <div className="col-full">
              <h1 className="text-primary text-center">No Show Found</h1>
            </div>
          )}
        </div>
        {!ActiveShowLoading && activeShow && (
          <div className="d-sm-flex flex-column flex-lg-row gap-4">
            <div className="col-lg-3 d-sm-flex justify-content-center">
              <div className="col-sm-9 col-md-6 border border-2 border-primary col-lg-12 text-center">
                <img
                  className="w-100 h-100"
                  src={activeShow.image ? activeShow.image.medium : noImag}
                  alt="show"
                />
              </div>
            </div>
            <div className="col-lg-9 text-primary">
              <div className="pb-2">
                <h1 className="text-light">{activeShow.name}</h1>
              </div>
              <div className="py-3">
                {activeShow.genres?.map((genre) => (
                  <span
                    key={genre}
                    className="text-light mx-2 p-2 rounded border border-redo border-light bg-dark opacity-75"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <div className="py-2">
                <strong className="text-light">
                  Rating:{" "}
                  <span className="text-primary">
                    {activeShow.rating?.average
                      ? activeShow.rating?.average
                      : "no rating"}
                  </span>
                </strong>
              </div>
              <div className="py-1">
                <strong className="text-light">
                  Status:{" "}
                  <span className="text-primary">
                    {activeShow.status ? activeShow.status : "no status"}
                  </span>
                </strong>
              </div>
              <div className="py-2">
                <strong className="office-site">
                  <a
                    href={activeShow.officialSite}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    {!activeShow.officialSite ? "No " : ""}Official Site
                  </a>
                </strong>
              </div>
              <div className="">
                <strong className="text-light">Story:</strong>
                <p className="text-light">
                  {activeShow.summary
                    ? activeShow.summary.replace(/<[^>]*>/g, "")
                    : "no story"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Show;
