/**
 * @author Gregory Vincent
 * Image Gallery showing the different units
 */

import { useState, useEffect } from "react";
const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    setCurrentImage(0);
  }, []);

  //used for auto scroll feature
//   const scroll = true;
  let currentImgInterval: number;
  let interval = 6000;

  function nextImage() {
    currentImgInterval = setInterval(NextImg, interval);
  }
 
  useEffect(() => {
      nextImage();
    //after each new picture is shown, reset the timer.
    return () => clearInterval(currentImgInterval);
  }, [currentImage]);

  /**logic for handling the next and prev images*/
  const NextImg = () => {
    //check list position before incrementing
    // setCurrentImage(currentImage === picListLength ? 0 : currentImage + 1);
  };
//   const PrevImg = () => {
//     setCurrentImage(currentImage - 1 === -1 ? picListLength : currentImage - 1);
//   };

  return (
        <div className="flex flex-col w-screen items-center w-screen h-screen">
          <div>
              <h1 className="text-white"> 
              Currently working on the image gallery
              </h1>
          </div>
      </div>
        );
};
export default ImageGallery;