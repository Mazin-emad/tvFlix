import React from "react";
import Search from "../search/Search";
import ShowsList from "../show/ShowsList";

const SearchPage: React.FC = () => {
  return (
    <>
      <div className="py-4"></div>
      <Search />
      <ShowsList />
    </>
  );
};

export default SearchPage;
