import StarSheet from './stars';

interface fontFaceOptions {
    tolerance?: number;
    delay?: number;
    glyphs?: string;
    success?: Function;
    error?: Function;
    timeout?: number;
    weight?: string;
    style?: string;
}

declare function FontFaceOnload(FontFamily:string, options:fontFaceOptions)
FontFaceOnload('Toronto Subway', {
  success: () => {
    [].slice.call(document.querySelectorAll('.top-billing')).forEach((node) => node.classList.add('top-billing--fonts-loaded'));
  },
  error: function() {},
  timeout: 5000 // in ms. Optional, default is 10 seconds
});

const canvas = document.getElementById('stars');
const seed = Date.now();
const numberOfStars = (window.innerWidth / 100) * 20
let stars = new StarSheet(canvas, numberOfStars, seed);

window.addEventListener('resize', () => {
  window.requestAnimationFrame(() => {
    stars = new StarSheet(canvas, numberOfStars, seed);
  });
});
