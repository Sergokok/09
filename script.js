// document.addEventListener('DOMContentLoaded', () => {
// 	const hole = document.getElementById('hole');

// 	let scale = 0;
// 	const openHole = setInterval(() => {
// 		scale += 0.01;
// 		hole.style.transform = `scale(${scale})`;
// 		if (scale >= 1) {
// 			clearInterval(openHole);

// 			const girl = document.createElement('img');
// 			girl.src = 'girl.png';
// 			girl.id = 'floatingGirl';

// 			girl.style.position = 'absolute';
// 			girl.style.bottom = '-200px';

// 			let pos = 0;
// 			const floatUp = setInterval(() => {
// 				pos++;
// 				girl.style.bottom = `${pos}px`;
// 				if (pos >= 250) {
// 					clearInterval(floatUp);

// 					setTimeout(() => {
// 						let angle = 0;
// 						setInterval(() => {
// 							angle += getRandom(-10, 10);
// 							girl.style.transform = `translateX(${angle}px)`;
// 						}, 100);
// 					}, 1000);
// 				}
// 			}, 5);

// 			hole.append(girl);
// 		}
// 	}, 20);

// 	function getRandom(min, max) {
// 		return Math.random() * (max - min) + min;
// 	}
// });

// =====================GPT

// document.addEventListener('DOMContentLoaded', function () {
// 	const oval = document.querySelector('.oval');
// 	const girlImage = document.querySelector('.girl-image');

// 	setTimeout(() => {
// 		oval.style.opacity = '1';
// 		girlImage.style.bottom = '0';
// 		girlImage.style.animation = 'floatImage 3s infinite';
// 	}, 1000);
// });
