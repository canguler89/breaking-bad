import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "./Spinner";

const Characters = ({ items, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default Characters;
