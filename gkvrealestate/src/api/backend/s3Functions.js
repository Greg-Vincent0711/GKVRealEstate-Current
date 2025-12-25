
/**
 * @author Gregory Vincent
 * @date 3/8/24
 * image fetching fn from s3
 */

import dotenv from "dotenv";
dotenv.config();
import AWS from "aws-sdk";

// check for these variables before doing anything else
if (
  !(
    process.env.BUCKET &&
    process.env.SECRET_ACCESS_KEY &&
    process.env.ACCESS_KEY_ID &&
    process.env.REGION
  )
) {
  throw new Error("Needed environment variables aren't present.");
}

AWS.config.update({
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const client = new AWS.S3({
  params: { Bucket: process.env.BUCKET },
  region: process.env.REGION,
});

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

const generateSingleImageURL = async (key) => {
  try {
    const getObjectParameters = {
      Bucket: process.env.BUCKET,
      Key: key,
    };
    // generate URL for a single image
    const url = await client.getSignedUrlPromise("getObject", getObjectParameters);
    return url;
  } catch (error) {
    console.error(`Error making URL for "${key}". More info...`, error);
    throw error;
  }
};

const generateImageURLs = async () => {
  try {
    let imageURLs = [];
    // list all objects in the bucket
    const data = await client.listObjectsV2({ Bucket: process.env.BUCKET ?? "" }).promise();

    if (data.Contents) {
      // filter only image files by extension
      const imageKeys = data.Contents
        .map((obj) => obj.Key)
        .filter((key) =>
          IMAGE_EXTENSIONS.some((ext) => key.toLowerCase().endsWith(ext))
        );
      
      // directly get the images
      imageURLs = await Promise.all(
        imageKeys.map(async (key) => {
          const url = await generateSingleImageURL(key);
          return { key, url };
        })
      );
    }

    console.log("Generated URLs for images.");
    return imageURLs;
  } catch (error) {
    console.error("Could not create URLs for images. Further information: ", error);
    return [];
  }
};

export default generateImageURLs;



