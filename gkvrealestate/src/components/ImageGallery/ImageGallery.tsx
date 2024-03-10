/**
 * @author Gregory Vincent Jr
 * Image Gallery showing the different units
 */

import { useState, useEffect } from "react";
import generateImageURLs from "../../api/s3Functions";
import { URLObject } from "../../types/URLObject";
const ImageGallery = async () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [imageURLs, setImageURLs] = useState<URLObject[]>([]);
  // grab image urls from s3
  const retrievedURLs: URLObject[] = await generateImageURLs();
  // update state and ui if the retrieved urls ever change
  useEffect(() => {
    setImageURLs([...retrievedURLs])
  }, [retrievedURLs]);

  function nextImage() {
    // go back to the beginning of the array if necessary
    setImageIndex(imageIndex === imageURLs.length ? 0 : imageIndex + 1)
  }
  let imageInterval = 6000
  useEffect(() => {
    setInterval(nextImage, 6000)
    // cleanup by removing the timer
    return () => clearInterval(imageInterval);
  }, [imageIndex]);

  // added for readability
  const currentURL = imageURLs[imageIndex].url;
  const currentKey = imageURLs[imageIndex].key;
  return (
  <div className="flex flex-col w-screen h-screen justify-center">
    <img className="w-full h-full" src={currentURL}key={currentKey}>
      <p>{currentKey}</p>
    </img>
  </div>
        );
};
export default ImageGallery;