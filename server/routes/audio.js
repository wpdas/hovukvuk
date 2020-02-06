const express = require('express');
const audioController = require('../controllers/audioController');

const initAudioRouter = () => {
  const audioRouter = express.Router();

  audioRouter.get('/', audioController.getSoundTrack);

  return audioRouter;
}

module.exports = initAudioRouter;