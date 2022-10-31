import React from "react";
import Card from "./Card";

export default function CardList({ list }) {
  const card = list.map((item) => (
    <ul className="every__item">{<Card item={item} key={item.title} />}</ul>
  ));
  console.log(typeof list.length )
  return (
    <div className="cardlist">
      {list.length > 1
      ?card
      :<div className="black-background">Nothing found :(</div>}
    </div>
  )
}
