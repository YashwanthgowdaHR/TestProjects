let isButtonDown = true;

function getId(element) {
	return document.getElementById(element);
}

let closeBtn = getId("close");
let readMoreBtn = getId("readMoreBtn");
let closeSpan = getId("closeSpan");
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

if (window.innerWidth < 900) {
	closeSpan.setAttribute("class", "right-arrow");
	closeBtn.addEventListener("click", function () {
		if (isButtonDown == false || isButtonDown == null) {
			isButtonDown = true;
			document.getElementById("nav").style.transform = "translateX(-100%)";
			closeSpan.setAttribute("class", "right-arrow");
		} else {
			isButtonDown = false;
			document.getElementById("nav").style.transform = "translateX(0%)";
			closeSpan.setAttribute("class", "left-arrow");
		}
	});
} else {
	closeSpan.setAttribute("class", "down-arrow");
	closeBtn.addEventListener("click", function () {
		if (isButtonDown == false || isButtonDown == null) {
			isButtonDown = true;
			document.getElementById("nav").style.transform = "translateY(-100%)";
			closeSpan.setAttribute("class", "down-arrow");
		} else {
			isButtonDown = false;
			document.getElementById("nav").style.transform = "translateY(0%)";
			closeSpan.setAttribute("class", "up-arrow");
		}
	});
}
