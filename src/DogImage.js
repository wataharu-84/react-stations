// DO NOT DELETE
import * as React from 'react'
import UseState, { useState } from 'react';

export function DogImage(props) {
  const [dogUrl, setDogUrl] = useState(props.url);

  return (
    <><img src={dogUrl} className="image"></img>
      <button className="button" onClick={() => fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => setDogUrl(data.message))}>
        Click here!!
      </button></>
  );

}

export default DogImage;