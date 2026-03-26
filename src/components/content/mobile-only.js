import screenshot from '@public/video.png'
const videoSnippet = document.createElement('div')
const videoCapture = document.createElement('img');

videoCapture.setAttribute('src', screenshot);
videoCapture.classList.add('screen-shot');
videoSnippet.classList.add('video-snippet');

videoSnippet.append(videoCapture);

export {videoSnippet};