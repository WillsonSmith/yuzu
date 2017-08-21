import StarSheet from './stars';

FontFaceOnload('Toronto Subway', {
  success: () => {
    [].slice.call(document.querySelectorAll('.top-billing')).forEach((node) => node.classList.add('top-billing--fonts-loaded'));
  },
  error: function() {},
  timeout: 5000 // in ms. Optional, default is 10 seconds
});

const c = document.getElementById('stars');
const seed = Date.now();
const numberOfStars = (window.innerWidth / 100) * 20
let stars = new StarSheet(c, numberOfStars, seed);



window.addEventListener('resize', () => {
  window.requestAnimationFrame(() => {
    stars = new StarSheet(c, numberOfStars, seed);
  });
});
