const path = require('path');
const songDir = path.join(__dirname, '../audio/song.mp3');

/**
 * Get Soundtrack
 */
const getSoundTrack = async (req, res) => {
  res.download(songDir);
}

module.exports = {
  getSoundTrack
};