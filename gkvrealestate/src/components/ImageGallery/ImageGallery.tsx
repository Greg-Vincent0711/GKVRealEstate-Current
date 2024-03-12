/**
 * @author Gregory Vincent Jr
 * Image Gallery showing the different units
 * test
 */

import { useState, useEffect } from "react";
import { URLObject } from "../../types/URLObject";
const ImageGallery = async () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [imageURLs, setImageURLs] = useState<URLObject[]>([]);
  
  // used for now, but need to implement caching
  useEffect(() => {
    fetch('/api/getURLs')
      .then(response => response.json())
      .then(data => setImageURLs(data))
      .catch(error => console.error('Error fetching images:', error));
  }, [imageURLs]);

  console.log(imageURLs)
  function changeImage() {
    // go back to the beginning of the array if necessary
    setImageIndex(imageIndex === imageURLs.length ? 0 : imageIndex + 1)
  }
  let imageInterval = 6000
  useEffect(() => {
    setInterval(changeImage, 6000)
    // cleanup by removing the timer
    return () => clearInterval(imageInterval);
  }, [imageIndex]);

    return (
      <div className="flex flex-col w-screen h-screen justify-center">
        <img className="w-full h-full" src={imageURLs[imageIndex].url}/>
      </div>
    );
};
export default ImageGallery;