let gulp = require("gulp");
let sass = require("gulp-sass-china");

gulp.task("aaa",()=>{
    gulp.src('sass/a.scss')
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest('css'));
});
