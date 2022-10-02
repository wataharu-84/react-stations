// DO NOT DELETE
import * as React from 'react'
import DogImage from "./DogImage";

export const Description = () => {
  return (
    <div className="div">
      <p className="text">犬の画像を表示するサイトです。</p>
      <DogImage url="https://images.dog.ceo/breeds/coonhound/n02089078_237.jpg" />
    </div>
  );
}

export default Description;