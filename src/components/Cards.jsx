import React from "react";
import Card from "./Card";
export default function Cards({ items }) {
  return (
    <>
      {items.map(({ name, title, text, imgSrc }, index, array) => (
        <Card
          key={name}
          name={name}
          title={title}
          text={text}
          imgSrc={imgSrc}
          index={index}
          array={array}
        />
      ))}
    </>
  );
}
