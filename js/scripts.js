// Typewriter effect
const typeWriter = document.querySelector('.typewriter');
const words = ["Web Developer", "Designer", "Photographer"];
let i = 0;
let j = 0;
let isDeleting = false;

function type() {
	if (i === words.length) {
		i = 0;
	}

	const word = words[i];

	if (isDeleting) {
		j--;
		typeWriter.textContent = word.substring(0, j);
	} else {
		j++;
		typeWriter.textContent = word.substring(0, j);
	}

	if (!isDeleting && j === word.length) {
		isDeleting = true;
		setTimeout(() => {
			isDeleting = false;
			i++;
		}, 1000);
	} else if (isDeleting && j === 0) {
		isDeleting = false;
		i++;
	}

	setTimeout(type, 300);
}

type();
