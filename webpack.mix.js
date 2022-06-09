const mix = require("laravel-mix");

mix
  .setPublicPath("./public")
  .js("src/app/app.js", "public/app.js")
  .sass("src/style/style.scss", "public/style.css")
  .options({
    autoprefixer: "last 5 versions",
    processCssUrls: false,
  })
  .copyDirectory("src/assets/images/", "public/images")
  .copyDirectory("src/assets/fonts/", "public/fonts")
  .browserSync();
// .copyDirectory("templates/", "public/")
// .browserSync({
//   // proxy: "http://localhost:3000",
//   watch: true,
//   server: "./public",
// });
// .version();
