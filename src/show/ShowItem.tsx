import { Link } from "react-router-dom";
import noImage from "../assets/images/no-img.png";
import { useTv } from "../context/constext";
import React, { useEffect, useState } from "react";
import { activeShow } from "../types";

interface ShowItemProps {
  show: activeShow;
}

const ShowItem: React.FC<ShowItemProps> = ({ show }) => {
  const { searchActiveShow, activeShow } = useTv();
  const style = {
    backgroundImage: `url(${
      show?.image?.medium ? show.image.medium : noImage
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "20rem",
    transition: "all 0.3s ease",
  };
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (activeShow?.id == show.id) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeShow, show.id]);
  return (
    <Link
      to={`/show/${show.id}`}
      onClick={() => searchActiveShow(+show.id)}
      className="text-decoration-none link-card"
    >
      <div className={`card ${isActive ? "activeItem" : ""}`} style={style}>
        <div className="d-flex flex-column h-100 align-items-center opacity-0 info cursor-pointer">
          {show.rating.average ? (
            <>
              <p className="">⭐</p>
              <p className="fs-3 text-primary">{show.rating.average}</p>
            </>
          ) : (
            <p className="fs-3 text-primary">no rating</p>
          )}
          <p className="fw-bold text-center position-absolute text-primary bottom-0 fs-4">
            {show.name ? show.name : "No Title"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ShowItem;
