const { src, dest, series, parallel, watch } = require('gulp'),

		sass          = require('gulp-sass'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		cleanCSS      = require('gulp-clean-css'),
		sourceMaps    = require('gulp-sourcemaps'),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		notify        = require('gulp-notify'),
		gcmq          = require('gulp-group-css-media-queries');

function styles () {
	return src('app/sass/**/*.sass')
	.pipe(sourceMaps.init())
	.pipe(sass().on('error', notify.onError()))
	.pipe(rename({ suffix: '.min'}))
	.pipe(sourceMaps.write())
	.pipe(dest('app/css'))
	.pipe(browserSync.stream());
}

function serve () {
	browserSync.init({
		server: {
			baseDir: "app"
		}
	}); 
	watch('app/*.html').on('change', browserSync.reload);
	watch('app/js/*.js').on('change', browserSync.reload);
	watch('app/sass/**/*.sass', styles);
}

function dist () {
	return src('app/css/main.min.css')
	.pipe(gcmq())
	.pipe(autoprefixer(['last 2 versions']))
	.pipe(cleanCSS())
	.pipe(dest('app/css'))
	.pipe(browserSync.stream());
}

function imageMin (done) {
	src('app/img/*')
	.pipe(imagemin())
	.pipe(dest('app/img'));
	done();
}

exports.default = series(styles, serve);
exports.dist = series(dist, serve);
exports.img = series(imageMin);


		
