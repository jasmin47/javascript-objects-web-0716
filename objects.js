var playlist = new Object({artistName: "songTitle"})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]=songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  var key = artistName
  delete playlist[key]
  return playlist
}
