import React from "react";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function App() {
  return (
    <div className="App">
     <carosel>
       <div>
         <img scr = "https://dog.ceo/api/breeds/image/random">
         </div>
         <div>
         <img scr = "https://dog.ceo/api/breeds/image/random">
         </div>
         <div>
         <img scr = "https://dog.ceo/api/breeds/image/random">
         </div>
       </carosel>
    </div>
  );
}
