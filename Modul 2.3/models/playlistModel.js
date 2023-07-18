let playlist = [];

function addSong(title, artists, url) {
  playlist.push({ title, artists, url, playCount: 0 });
}

function increasePlayCount(title) {
  const index = playlist.findIndex(item => item.title === title);
  if (index !== -1) {
    playlist[index].playCount++;
  }
}

function getPlaylist() {
  return playlist;
}

function getSortedPlaylist() {
  return playlist.sort((a, b) => b.playCount - a.playCount);
}

module.exports = {
  addSong,
  increasePlayCount,
  getPlaylist,
  getSortedPlaylist
};
