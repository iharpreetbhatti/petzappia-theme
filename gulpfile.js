const { src, dest, series, parallel } = require("gulp");
const pug = require("gulp-pug");

// My Tasks List

// Compile Pug to HTML
function html() {
  return src("src/pug/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(dest("dist"));
}
// compile Scss to CSS
// autoprifix and minify CSS
// Transpile JS to ES5
// minify JS
// Optimize images to webp using imagemin
function defaultTask(cb) {
  console.log("Hello from dev");
  cb();
}

exports.default = defaultTask;
exports.html = html;
