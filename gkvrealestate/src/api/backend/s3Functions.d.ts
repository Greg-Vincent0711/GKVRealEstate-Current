// s3Functions.d.ts
export interface URLObject {
    key: string;
    url: string;
  }
  
  declare function generateImageUrls(): Promise<URLObject[]>;
  export default generateImageUrls;