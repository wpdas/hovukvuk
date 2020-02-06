const express = require('express');
const imageController = require('../controllers/imagesController');

const initImagesRouter = () => {
  const imageRouter = express.Router();

  imageRouter.get('/', imageController.getImages);

  return imageRouter;
}

module.exports = initImagesRouter;