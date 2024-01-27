import gulp from "gulp";
import pug from "gulp-pug";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import minifyCss from "gulp-clean-css";
const { src, dest, series, parallel } = gulp;
const sass = gulpSass(dartSass);

// My Tasks List

// Compile Pug to HTML
function compileHtml() {
  return src("src/pug/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(dest("dist"));
}
// compile Scss to CSS
// autoprifix and minify CSS
function compileSass() {
  return src("src/scss/*.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(minifyCss())
    .pipe(dest("dist/css", { sourcemaps: "." }));
}

// Transpile JS to ES5
// minify JS
// Optimize images to webp using imagemin

export default series(compileSass, compileHtml);
