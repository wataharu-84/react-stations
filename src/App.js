// DO NOT DELETE

import * as React from 'react'
import './App.css'
import UseState, { useState } from 'react';

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/coonhound/n02089078_237.jpg");
  var newImg;
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => newImg = data.message);

  return (
    <>
      <header>
        Dogアプリ
      </header>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl}></img>
      <button onClick={() => setDogUrl(newImg)}>Click here!!</button>
    </>
  )
}
