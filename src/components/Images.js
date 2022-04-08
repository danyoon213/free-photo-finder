import React from "react";

const Images = (props) => {
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.urls.regular} />
  })

  return <div>{images}</div>
}

export default Images;