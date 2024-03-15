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
  

  const filterImageNames = (urls: URLObject[]): URLObject[] => {
    const separators = /[._]|\jpg/g; 
      let res: URLObject[] = urls.map((url) => {
        url.key = url.key?.split(separators).join(" ")
        return url;
      })
      return res;
  }

  useEffect(() => {
    fetch('http://localhost:5001/getImageURLs')
      .then(response => response.json())
      .then((data: URLObject[]) => {
        setImageURLs(filterImageNames(data))
      })
  },[]);

  // as long as cache isn't cleared and images don't change(they most likely won't)
  const memoizedImageURLs = useMemo(() => imageURLs, [imageURLs])
  function switchImage() {
    setImageIndex(imageIndex === memoizedImageURLs.length - 1 ? 0 : imageIndex + 1)
  }

    let picInterval: NodeJS.Timeout;
    let interval = 3000;
    useEffect(() => {
      //automatically scroll to the next picture
        // picInterval = setInterval(switchImage, interval);
      //after each new picture is shown, reset the timer.
      return () => clearInterval(picInterval);
    }, [imageIndex]);  


  const currentImage = (memoizedImageURLs[imageIndex] && memoizedImageURLs[imageIndex].url) ?? "";
  const currentKey = (memoizedImageURLs[imageIndex] && memoizedImageURLs[imageIndex].key) ?? "";
  return memoizedImageURLs.length >= 1 && (
    <div className="flex flex-col w-screen h-full justify-start text-center">
      <img className="w-full h-64 sm:h-72 sm:px-6 px-4 md:h-96 md:px-8 lg:px-10 lg:h-4/6 2xl:h-96 2xl:px-24" src={currentImage} alt={currentKey} />
      <p className="text-white text-2xl m-2 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl">{currentKey}</p>
      {/* <button className="text-white"onClick={switchImage}>click to change</button> */}
    </div>
  );
};
export default ImageGallery;