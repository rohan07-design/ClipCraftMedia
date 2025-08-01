// for reels 
let index = 0;
const visibleVideos = 3;
const track = document.querySelector('.video-track');
const total = track.children.length;

function scrollVideos(direction) {
  const maxIndex = total - visibleVideos;
  index += direction;
  if (index < 0) index = 0;
  if (index > maxIndex) index = maxIndex;

  const videoWidth = track.children[0].offsetWidth;
  track.style.transform = `translateX(-${index * videoWidth}px)`;
}

// for another reel 
let newIndex = 0;
const newvisibleVideos = 3;
const newTrack = document.querySelector('.video-track-new');
const newTotal = newTrack.children.length;

function scrollVideosNew(direction) {
  const maxIndex = newTotal - newvisibleVideos;
  newIndex += direction;
  if (newIndex < 0) newIndex = 0;
  if (newIndex > maxIndex) newIndex = maxIndex;

  const videoWidth = newTrack.children[0].offsetWidth;
  newTrack.style.transform = `translateX(-${newIndex * videoWidth}px)`;
}
