/**
 * @author Gregory Vincent Jr
 * Image Gallery showing the different units
 * test
 */

import { useState, useEffect, useMemo } from "react";
import { URLObject } from "../../types/URLObject";
const ImageGallery = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [imageURLs, setImageURLs] = useState<URLObject[]>([]);
  
  // on first render
  useEffect(() => {
    fetch('http://localhost:5001/getImageURLs')
      .then(response => response.json())
      .then((data: URLObject[]) => setImageURLs(data))
  },[]);
  // as long as cache isn't cleared and images don't change(they most likely won't)
  const memoizedImageURLs = useMemo(() => imageURLs, [imageURLs])
  // console.log(imageURLs)
  function switchImage() {
    setImageIndex(imageIndex === imageURLs.length - 1 ? 0 : imageIndex + 1)
  }
  // let imageInterval = 6000 
  useEffect(() => {
    // change the picture every six seconds
    // setInterval(switchImage, 6000)
    // cleanup by removing the timer
    // return () => clearInterval(imageInterval);
  }, [imageIndex]); 
  const currentImage = (memoizedImageURLs[imageIndex] && memoizedImageURLs[imageIndex].url) ?? "";
  const currentKey = (memoizedImageURLs[imageIndex] && memoizedImageURLs[imageIndex].key) ?? "";
    return memoizedImageURLs.length !== 0 &&  (
      <div className="flex flex-col w-screen h-full justify-start items-center">
        <img className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4" src={currentImage}/>
        <p className="text-white text-xl z-10 ">{currentKey}</p>
      </div>
    );
};
export default ImageGallery;