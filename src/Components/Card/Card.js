import React, { useState } from "react";
import aCard from "../../images/2C.png";


function Card({value}) {
  const [flipped, setFlipped] = useState(true);

  const handelClick = () => {
    setFlipped(!flipped);
  };
  return (
    <article className={`card ${flipped ? "flip" : ""}`} onClick={handelClick}>
      <img
        className="card__front"
        src={require(`../../images/${value}.png`).default}
      ></img>
    </article>
  );
}

export default Card;
