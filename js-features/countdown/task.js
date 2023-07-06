let timerValue = parseInt(document.getElementById("timer").textContent);

function countdown() {
	let hours = Math.floor(timerValue / 3600);
	let minutes = Math.floor((timerValue % 3600) / 60);
	let seconds = timerValue % 60;

	let formattedHours = String(hours).padStart(2, "0");
	let formattedMinutes = String(minutes).padStart(2, "0");
	let formattedSeconds = String(seconds).padStart(2, "0");

	document.getElementById("timer").textContent = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;

	if (timerValue === 0) {
		const downloadLink = document.createElement("a");
		downloadLink.href = "https://sun9-10.userapi.com/impg/1Gpro1XYwOOEGr9Ff3HOnC0HYTeVgoicm-U22A/FeaoG3l89rY.jpg?size=604x438&quality=96&sign=552ca6273710dd007a97bf99a153ce0a&type=album";
		downloadLink.download = "youwin.jpg";

		if ("download" in downloadLink) {
			downloadLink.style.display = "none";
			document.body.appendChild(downloadLink);
			downloadLink.click();
			document.body.removeChild(downloadLink);
		}

		alert("Вы победили в конкурсе!");
	} else {
		setTimeout(function() {
			timerValue--;
			countdown();
		}, 1000);
	}
}

countdown();