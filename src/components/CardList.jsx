import React from 'react'
import Card from './Card'

export default function CardList({ list }) {
  return list.map((item) => (
    <ul className="every__item">
      <Card item={item} key={item.title} />
    </ul>
  ));
}
