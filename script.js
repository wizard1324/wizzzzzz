// DOM elements
const videoPlayer = document.getElementById('video-player');
const startCallBtn = document.getElementById('start-call-btn');
const endCallBtn = document.getElementById('end-call-btn');

// Replace with your ESP32-CAM live video streaming URL
const videoStreamURL = 'http://192.168.134.236';

// Event listeners
startCallBtn.addEventListener('click', startCall);
endCallBtn.addEventListener('click', endCall);

// Function to start the call
function startCall() {
  // Play the video stream
  videoPlayer.src = videoStreamURL;
}

// Function to end the call
function endCall() {
  // Pause the video stream
  videoPlayer.pause();
  videoPlayer.src = '';
}
