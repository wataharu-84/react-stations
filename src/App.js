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

  return (
    <>
      <header className="header">
        Dogアプリ
      </header>
      <div className="div">
        <p className="text">犬の画像を表示するサイトです。</p>
        <img src={dogUrl} className="image"></img>
        <button onClick={() => fetch("https://dog.ceo/api/breeds/image/random")
          .then(response => response.json())
          .then(data => setDogUrl(data.message))} className="button">Click here!!</button>
      </div>
    </>
  )
}
