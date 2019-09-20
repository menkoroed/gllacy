'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const svgSymbols = require('gulp-svg-symbols')
const imagemin = require('gulp-imagemin');

gulp.task('css', function () {
	return gulp.src('source/sass/style.scss')
		.pipe(plumber())
    		.pipe(sourcemap.init())
    		.pipe(sass())
    		.pipe(postcss([
      				autoprefixer()
    		]))
    		.pipe(sourcemap.write('.'))
    		.pipe(gulp.dest('source/css'))
    		.pipe(server.stream());
});

gulp.task('server', function () {
	server.init({
    		server: 'source/',
    		notify: false,
    		open: true,
    		cors: true,
    		ui: false
	});

	gulp.watch('source/sass/**/*.{scss,sass}', gulp.series('css'));
	gulp.watch('source/*.html').on('change', server.reload);
});

gulp.task('sprites', function() {
	return gulp
		.src('source/img/*.svg')
		.pipe(svgSymbols())
		.pipe(gulp.dest('source/img'))
});

gulp.task('imagemin', () =>
	gulp.src('source/img/*')
		.pipe(imagemin([
			    imagemin.gifsicle({interlaced: true}),
			    imagemin.jpegtran({progressive: true}),
			    imagemin.optipng({optimizationLevel: 5}),
			    imagemin.svgo({
				            plugins: [
						                {removeViewBox: true},
						                {cleanupIDs: false}
						            ]
				        })
		]))
		.pipe(gulp.dest('source/img'))
);

gulp.task('start', gulp.series('css', 'server'));
