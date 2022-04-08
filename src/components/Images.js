import "./Images.css";
import React from "react";
import ImageShow from "./ImageShow";

const Images = (props) => {
  const images = props.images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="images">{images}</div>;
};

export default Images;
