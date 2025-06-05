document.addEventListener("DOMContentLoaded", () => {
	const track = document.getElementById("infiniteTrack");
	const slider = document.querySelector(".infinite-slider");
	const speed = 0.8; 
	let offset = 0;

	
	const originalSlides = Array.from(track.children);
	for (let i = 0; i < 3; i++) {
		originalSlides.forEach((slide) => {
			const clone = slide.cloneNode(true);
			track.appendChild(clone);
		});
	}

	
	function animate() {
		offset += speed;
		track.style.transform = `translateX(-${offset}px)`;

		if (offset >= track.scrollWidth / 3) {
	
			offset = 0;
			track.style.transform = `translateX(0)`;
		}

		requestAnimationFrame(animate);
	}

	animate();
});
