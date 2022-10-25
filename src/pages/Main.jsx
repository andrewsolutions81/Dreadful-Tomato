import React, { useState } from "react";
import Header from "../components/Header";
import Movies from "../components/Movies";
import Series from "../components/Series";
import { moviesList, seriesList } from "../utils/data";

export default function Main() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("movies");
  let pageShown = <Movies />;

  pageShown =
    tab === "movies" ? (
      <Movies moviesList={moviesList} />
    ) : (
      <Series seriesList={seriesList} />
    );

  return (
    <div className="main-container">
      <Header changeTab={setTab} tab={tab} search={search} setSearch={setSearch}/>
      <div className="page__container">{pageShown}</div>
    </div>
  );
}
