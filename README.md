To someone viewing this site as opposed to the original, there isn't too much of a difference. So, I think it's best to point out the biggest changes between this project and the original one I created some years ago. 

1. Responsive Design. If anyone was to look at the previous iteration of this site on a mobile device, it would be pretty much unusable. Thankfully I've learned the importance of Responsive Design since the hosting of the original, and created this one with a mobile first approach. The overall UI is the same since there isn't much to it, but the fact that it is _actually readable___ on any screen size automatically marks this as an improvement.

   
2. General Robustness. The original website had the images used for the Image Gallery component stored directly in an array...on the client side. The code is still there and can be looked at. Looking back, this wasn't the best idea. So I decided to integrate the website with S3. I was already using Amplify for hosting, so this was a no brainer. S3 overall is a much more secure way of dealing with data(even if images of public locations aren't too sensitive). It also scales **much*** better than the original way the images were stored - if any images are ever updated(which they will be), or the amount of units to showcase changes, it's much easier to just edit what's stored on S3 than to rebuild the entire website on Amplify because some pictures in an array were changed.

3. Code Quality. Even though the source code between the two sites is pretty similar, I took the time to update or improve it where I could, and also took advantage of Linting, which is something I wasn't aware of when the first site was created.

One final note, Node and TS for some reason would NOT work well when trying to hose the original backend code using Lambda. So the localhost version of this site uses Express, while the official version that's hosted uses a Python script with Boto3 to server image urls. I've added it to this repository for completeness.
