/**
 * @author Gregory Vincent
 * @date 3/8/24
 * file for fetching images from S3
 */
require('dotenv').config();
var AWS = require("aws-sdk");
const { S3Client, ListObjectsV2Command } = require("@aws-sdk/client-s3");

if (!process.env.REGION) {
    throw new Error("REGION environment variable is missing");
}

AWS.config.update({ 
    region: process.env.REGION,
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACESS_KEY 
});
const getImages = async () => {
    const client = new AWS.S3({
        params: {Bucket: process.env.BUCKET},
        region: process.env.REGION,
    })
    try{
        const responseData = await client.listObjectsV2().promise();
        return responseData.Contents
    } catch(error){
        console.log("There was an error downloading images:", error)
    }
}

getImages();
module.exports = getImages;


