var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	initializeVideoElement();
	addEventListeners();

});

function initializeVideoElement() {
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	video.classList.add("oldSchool");
  }
  
  function addEventListeners() {
	document.querySelector("#play").addEventListener("click", playVideo);
	document.querySelector("#pause").addEventListener("click", pauseVideo);
	document.querySelector("#slower").addEventListener("click", slowDownVideo);
	document.querySelector("#faster").addEventListener("click", speedUpVideo);
	document.querySelector("#skip").addEventListener("click", skipAhead);
	document.querySelector("#mute").addEventListener("click", toggleMute);
	document.querySelector("#slider").addEventListener("input", updateVolume);
	document.querySelector("#vintage").addEventListener("click", addOldSchoolClass);
	document.querySelector("#orig").addEventListener("click", removeOldSchoolClass);
  }
  
  function playVideo() {
	video.play();
	updateVolumeInfo();
  }
  
  function pauseVideo() {
	video.pause();
  }
  
  function slowDownVideo() {
	video.playbackRate -= 0.1;
	console.log("New speed is " + video.playbackRate);
  }
  
  function speedUpVideo() {
	video.playbackRate += 0.1;
	console.log("New speed is " + video.playbackRate);
  }
  
  function skipAhead() {
	video.currentTime += 10;
	if (video.currentTime > video.duration) {
	  video.currentTime = 0;
	}
	console.log("Current video location is " + video.currentTime);
  }
  
  function toggleMute() {
	if (video.muted) {
	  video.muted = false;
	  document.querySelector("#mute").textContent = "Mute";
	} else {
	  video.muted = true;
	  document.querySelector("#mute").textContent = "Unmute";
	}
	updateVolumeInfo();
  }
  
  function updateVolume() {
	var slider = document.querySelector("#slider");
	video.volume = slider.value / 100;
	updateVolumeInfo();
  }
  
  function updateVolumeInfo() {
	var volumeInfo = document.querySelector("#volume");
	volumeInfo.textContent = (video.muted ? "Muted" : Math.round(video.volume * 100) + "%");
  }
  
  function addOldSchoolClass() {
	video.classList.add("oldSchool");
  }
  
  function removeOldSchoolClass() {
	video.classList.remove("oldSchool");
  }
    

