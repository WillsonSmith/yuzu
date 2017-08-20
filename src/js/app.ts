import StarSheet from './stars';

const c = document.getElementById('stars');
const seed = Date.now();
const numberOfStars = (window.innerWidth / 100) * 20
let stars = new StarSheet(c, numberOfStars, seed);

window.addEventListener('resize', () => {
  stars = new StarSheet(c, numberOfStars, seed);
})
