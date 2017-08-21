postcss src/css/styles.css --output build/css/styles.c.css;
webpack --config webpack.config.build.js;
cp -R src/js/vendor prod/js/vendor;
cp -R src/fonts build/fonts;
cp -R src/images build/images;
cp src/index.html build/index.html;
