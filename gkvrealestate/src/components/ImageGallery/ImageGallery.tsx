/**
 * @author Gregory Vincent Jr
 * Image Gallery showing the different units
 * test
 */

import { useState, useEffect} from "react";
import { URLObject } from "../../types/URLObject";
import { useQuery } from "@tanstack/react-query";;
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

  const getImages = async (): Promise<URLObject[]> => {
    const data = (await fetch('http://localhost:5001/getImageURLs')).json()
    setImageURLs(filterImageNames(await data))
    return data
  }

  let picInterval: NodeJS.Timeout;
  let interval = 3000;
  useEffect(() => {
    //automatically scroll to the next picture
      // picInterval = setInterval(switchImage, interval);
    //after each new picture is shown, reset the timer.
    return () => clearInterval(picInterval);
  }, [imageIndex]);  

  const { isLoading, isError } = useQuery(
    {queryKey: ["data"], 
    queryFn: getImages,
    staleTime: 600,
    gcTime: Infinity,
    });


  if (isLoading) return <div>Currently Loading...</div>
  if (isError) return <div>Error loading Image URLs.</div>

  function switchImage() {
    setImageIndex(imageIndex === imageURLs.length - 1 ? 0 : imageIndex + 1)
  }

  const currentImage = (imageURLs[imageIndex] && imageURLs[imageIndex].url) ?? "";
  const currentKey = (imageURLs[imageIndex] && imageURLs[imageIndex].key) ?? "";
  return imageURLs.length >= 1 && (
    <div className="flex flex-col w-screen h-full justify-start text-center">
      <img className="w-full h-64 sm:h-96 xl:h-3/4 2xl:h-screen 2xl:pb-8 sm:h-72 2xl:px-0 md:h-96 md:px-0 2xl:h-96 2xl:px-24" src={currentImage} alt={currentKey} />
      <p className="text-white text-2xl m-2 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl 2xl:-mt-32 3xl:-mt-40">{currentKey}</p>
    </div>
  );
};
export default ImageGallery;