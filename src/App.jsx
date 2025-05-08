import { useState } from "react";
import img1 from "./assets/dice1.jpg";
import img2 from "./assets/dice2.jpg";
import img3 from "./assets/dice3.jpg";
import img4 from "./assets/dice4.jpg";
import img5 from "./assets/dice5.jpg";
import img6 from "./assets/dice6.jpg";
import "./App.css";

function App() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentImage, setCurrentImage] = useState(img1);
  const [currentImage2, setCurrentImage2] = useState(img2);
  const showRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomIndex2 = Math.floor(Math.random() * images.length);

    setCurrentImage(images[randomIndex]);
    setCurrentImage2(images[randomIndex2]);
  };
  return (
    <>
      <div className="container">
        <h1>Ready to have some fun!</h1>
        <button onClick={showRandomImage}>Show Random Images</button>
        {currentImage && (
          <div>
            <img
              src={currentImage}
              alt="Random image"
              width={{ width: "140px", height: "auto" }}
            />
            <h3>Player One</h3>
          </div>
        )}
        {currentImage2 && (
          <div>
            <img
              src={currentImage2}
              alt="Random image"
              width={{ width: "140px", height: "auto" }}
            />
            <h3>Player Two</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
