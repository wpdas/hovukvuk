const request = require('request-promise-native')

let cachedLinks = [];

/**
 * Get GIF images
 */
const getImages = async (req, res) => {
  const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
  const apiRequest = `http://api.giphy.com/v1/gifs/search?q=dancing&api_key=${GIPHY_API_KEY}&limit=50`;
  let data;
  let parsedData;

  if (cachedLinks.length < 1) {
    console.log('Caching links');
    data = await request.get(apiRequest);
    parsedData = JSON.parse(data);

    cachedLinks = parsedData.data.map((imageData) => {
      return {
        url: imageData.images.original.url,
        width: imageData.images.original.width,
        height: imageData.images.original.height,
      };
    })
  } else {
    console.log('Using cached links');
  }

  res.json({
    success: true,
    data: cachedLinks,
  });
}

module.exports = {
  getImages
};