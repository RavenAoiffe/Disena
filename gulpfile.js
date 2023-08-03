const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
/*const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');
*/
const paths = {
    scss: 'src/scss/**/*.scss',
    img: 'src/img/**/*',
    js: 'src/js/**/*'
}

function css(){
 return src(paths.scss)
 //pipe(sourcemaps.init())
 .pipe(sass())
 /*..pipe(postcss([autoprefixer(),cssnano()]))
 .pipe(sourcemaps.write('.'))*/
 .pipe(dest('./build/css'))
}


function javascript (){
    return src(paths.js)
   // .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    /*.pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))*/
    .pipe(dest('./build/js'))
}
function watchArchivos(){
    watch(paths.scss, css) 
    watch(paths.js, javascript) 
}


exports.css = css;
exports.javascript = javascript;
exports.watchArchivos = watchArchivos;
exports.default = series(css,javascript, watchArchivos)