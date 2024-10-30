import React, { useEffect, useState } from "react";
import { useTv } from "../context/constext";
import { useNavigate, useLocation } from "react-router";

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const { searchShows } = useTv();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const location = useLocation();
  useEffect(() => {
    if (location.search && location.search.includes("key")) {
      let key = location.search.split("key=")[1];
      if (key && key.includes("&")) {
        key = key.split("&")[0];
      }
      if (key) {
        key = decodeURIComponent(key);
        setSearchValue(key);
        searchShows(key);
      }
    }
  }, [location.search]);
  const [isempty, setIsempty] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchValue.trim()) {
      setIsempty(true);
      return;
    } else {
      setIsempty(false);
    }
    searchShows(searchValue);
    navigate("/search?key=" + searchValue);
  };

  const style = {
    top: "-30px",
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="d-flex w-100 justify-content-center mb-5"
      >
        <input
          type="search"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="search for shows"
          className="px-4 py-2 outline-none border-0 fs-5"
        />
        <button
          className="bg-primary border-0 outline-none px-4 py-2 fs-5"
          type="submit"
        >
          Search
        </button>
      </form>
      {isempty && (
        <p
          className="text-center fs-4 position-relative text-danger"
          style={style}
        >
          Please enter a search value
        </p>
      )}
    </>
  );
};

export default Search;
