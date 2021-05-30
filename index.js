let isButtonDown = true;

function getId(element) {
	return document.getElementById(element);
}

let readMoreBtn = getId("readMoreBtn");
let buttonPath = getId("buttonPath");
let isPlaying = false;

function playAudio(src) {
	let mainContainer = getId("mainContainer");
	let audioTag;
	audioTag = document.getElementById("myaudio");
	if (audioTag == null) {
		audioTag = document.createElement("audio");
		audioTag.setAttribute("id", "myaudio");
		audioTag.src = src;
		mainContainer.appendChild(audioTag);
	} else {
		console.log(isPlaying);
		if (isPlaying) {
			audioTag.pause();
			isPlaying = false;
			audioTag.src = "";
			audioTag.src = src;
		}
	}

	try {
		audioTag.play(); //Quicktime, Windows Media Player, etc.
	} catch (e) {
		audioTag.pause();
		console.log("Error: ", e); //Real Player
	}
	audioTag.onplaying = () => {
		isPlaying = true;
	};
}

document.getElementById("close").addEventListener("click", function () {
	if (isButtonDown == false || isButtonDown == null) {
		isButtonDown = true;
		document.getElementById("nav").style.transform = "translateY(-100%)";
		buttonPath.setAttribute(
			"d",
			"M55.4,10.8L33.1,33c-1.8,2-5,2-6.9,0L4.1,10.8  c-2.1-2-2.6-4.6-0.5-6.6l0.8-0.8c1.8-1.7,3.8-2.1,5.5-0.3c5.4,5.5,10.8,11,16.3,16.5c1.9,1.8,5,1.8,6.9,0c5.5-5.5,11-11,16.5-16.5  c1.5-1.7,3.6-1.4,5.3,0.3l0.8,0.8C57.7,6.2,57.2,8.9,55.4,10.8L55.4,10.8z"
		);
	} else {
		isButtonDown = false;
		document.getElementById("nav").style.transform = "translateY(0%)";
		buttonPath.setAttribute(
			"d",
			"M54.7,26.3L32.5,4.2c-2-1.9-5-1.9-6.9,0L3.4,26.3c-2,2-2.4,4.8-0.4,6.7l0.8,0.9c1.7,1.6,3.9,1.9,5.4,0.2c5.5-5.5,11-10.8,16.5-16.3c1.8-2,4.9-2,6.9,0c5.5,5.5,10.9,10.8,16.3,16.3c1.7,1.7,3.7,1.4,5.5-0.2l0.7-0.9C57.1,31.1,56.7,28.3,54.7,26.3L54.7,26.3z"
		);
	}
});
