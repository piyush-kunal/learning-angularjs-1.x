/**
 * Created by Ramkumar on 4/9/2016.
 */
var gulp = require('gulp');
var autoprefix = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var imageMin = require('gulp-imagemin');
var changed = require('gulp-changed');
var browserSync = require('browser-sync').create();
var scriptUglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('copy-web-resources', [], function () {
    gulp.src(['app/*.html'])
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('copy-data-resources', [], function () {
    gulp.src(['app/data/*'])
        .pipe(gulp.dest('build/data/'));
});

gulp.task('copy-fonts-resources', [], function () {
    gulp.src(['app/fonts/*'])
        .pipe(gulp.dest('build/fonts/'));
});

gulp.task('copy-lib-resources', [], function () {
    gulp.src(['app/lib/**/*'])
        .pipe(gulp.dest('build/lib/'));
});

gulp.task('prepare-js-resources', [], function () {
    gulp.src(['app/js/**/*.js'])
        .pipe(scriptUglify())
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('prepare-view-resources', [], function () {
    gulp.src(['./app/js/common/partials/**/*'])
        .pipe(gulp.dest('build/js/common/partials/'))
        .pipe(browserSync.reload({
            stream: true
        }));

    gulp.src(['./app/js/crmsystem/partials/**/*'])
        .pipe(gulp.dest('build/js/crmsystem/partials/'))
        .pipe(browserSync.reload({
            stream: true
        }));

    gulp.src(['./app/js/security/partials/**/*'])
        .pipe(gulp.dest('build/js/security/partials/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('styles', [], function () {
    gulp.src(['app/css/*.css'])
        .pipe(concat('styles.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('copy-external-resources', [], function () {
    gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('./build/css/bootstrap/'));

    gulp.src('./node_modules/bootstrap/dist/css/bootstrap-theme.min.css')
        .pipe(gulp.dest('./build/css/bootstrap/'));

    gulp.src('./node_modules/c3/c3.min.css')
        .pipe(gulp.dest('./build/css/c3/'));

    gulp.src('./node_modules/angular-ui-router-anim-in-out/css/anim-in-out.css')
        .pipe(gulp.dest('./build/css/anim-ui-router-anim-in-out/'));
});

gulp.task('imagemin', [], function () {
    var source = 'app/images/**/*';
    var destination = 'build/images/'

    gulp.src(source)
        .pipe(changed(destination))
        .pipe(imageMin())
        .pipe(gulp.dest(destination));
});

gulp.task('browserSync', [], function () {
    browserSync.init({
        server: {
            baseDir: 'build'
        }
    });
});

gulp.task('jshint', function () {
    gulp.src('./app/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('browserify', function () {
    var sourceName = 'main.js';
    var sourceEntryPointFileName = 'app/js/' + sourceName;

    return browserify([sourceEntryPointFileName])
        .bundle()
        .pipe(source(sourceName))
        .pipe(buffer())
        .pipe(scriptUglify())
        .pipe(gulp.dest('./build/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserify-nouglify', function () {
    var sourceName = 'main.js';
    var sourceEntryPointFileName = 'app/js/' + sourceName;

    return browserify([sourceEntryPointFileName])
        .bundle()
        .pipe(source(sourceName))
        .pipe(buffer())
        .pipe(gulp.dest('./build/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('dev-watch', ['browserify-nouglify', 'prepare-view-resources', 'copy-web-resources'], function () {
    gulp.watch('app/js/**/*.js', ['browserify-nouglify', 'copy-web-resources']);
    gulp.watch('app/js/**/partials/**/*', ['prepare-view-resources', 'copy-web-resources']);
});

gulp.task('default',
    [
        'browserSync',
        'copy-web-resources',
        'copy-data-resources',
        'copy-fonts-resources',
        'copy-lib-resources',
        'copy-external-resources',
        'prepare-view-resources',
        'browserify',
        'styles',
        'imagemin'
    ], function () {
        gulp.watch('app/css/*.css', ['styles']);
        gulp.watch('app/js/**/*.js', ['browserify']);
        gulp.watch('app/*.html', ['copy-web-resources']);
        gulp.watch('app/js/**/partials/**/*', ['prepare-view-resources']);
    });

gulp.task('build',
    [
        'copy-web-resources',
        'copy-data-resources',
        'copy-fonts-resources',
        'copy-lib-resources',
        'copy-external-resources',
        'prepare-view-resources',
        'browserify-nouglify',
        'styles',
        'imagemin'
    ]);