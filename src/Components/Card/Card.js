import React, { useState } from "react";
import aCard from "../../images/2C.png";


function Card({children}) {
  const [flipped, setFlipped] = useState(true);

  const handelClick = () => {
    setFlipped(!flipped);
  };
  return (
    <article className={`card ${flipped ? "flip" : ""}`} onClick={handelClick}>
      <img
        className="card__front"
        src={require(`../../images/${children?children:"AD"}.png`).default}
      ></img>
    </article>
  );
}

export default Card;
