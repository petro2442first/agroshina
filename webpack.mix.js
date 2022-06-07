const mix = require("laravel-mix");

mix
  .setPublicPath("./public")
  .js("src/app/app.js", "public/")
  .sass("src/style/style.scss", "public/")
  .options({
    autoprefixer: "last 5 versions",
    processCssUrls: false,
  })
  .copyDirectory("src/assets/images/", "public/images")
  .copyDirectory("src/assets/fonts/", "public/fonts")
  .browserSync({
    watch: true,
    server: "./public",
  })
  .version();
