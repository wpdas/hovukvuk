const initImagesRouter = require('./images');
const initAudioRouter = require('./audio');

const initRoutes = app => {
  app.use('/api/image/', initImagesRouter())
  app.use('/api/audio/', initAudioRouter())
}

module.exports = initRoutes;