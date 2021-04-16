import React from "react";

import "./Card.css";

const Card = (props) => {
  //Card nam je reusable wrapping component, ima svoj style, ali prima i style iz drugih componenti, zato joj ih moramo dodati:
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
