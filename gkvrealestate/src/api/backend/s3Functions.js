/**
 * @author Gregory Vincent
 * @date 3/8/24
 * Fetch images from Lambda API
 */

const API_URL = import.meta.env.VITE_AWS_URL;

const generateImageURLs = async () => {
  try {
    console.log('Fetching images from API...');
    
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data = await response.json();
    
    console.log(`Received ${data.images.length} image URLs`);
    return data.images;
    
  } catch (error) {
    console.error('Could not fetch images from API:', error);
    return [];
  }
};

export default generateImageURLs;