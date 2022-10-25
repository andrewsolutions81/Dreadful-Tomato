import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { moviesList, seriesList } from "../utils/data";
import CardList from "../components/CardList";

export default function Main() {
  const [list, setList] = useState(moviesList);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("movies");

  useEffect(() => {
    tab === "movies" ? setList(moviesList) : setList(seriesList);
  }, [tab]);

  useEffect(() => {
    const searchList = tab === "movies" ? moviesList : seriesList;
    setList(searchList.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())));
  }, [search,tab]);
  return (
    <div className="main-container">
      <Header setTab={setTab} search={search} setSearch={setSearch} />
      <div className="page__container">
        <CardList list={list} />
      </div>
    </div>
  );
}
