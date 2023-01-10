const gulp = require(`gulp`);
const ghpages = require(`gh-pages`);
const html = require(`./gulp/task/html`);
const clean = require(`./gulp/task/clean`);
const favicon = require(`./gulp/task/favicons`);
const fonts = require(`./gulp/task/fonts`);
const images = require(`./gulp/task/images`);
const style = require(`./gulp/task/style`);
const scripts = require(`./gulp/task/scripts`);
const serve = require(`./gulp/task/serve`);
const sprite = require(`./gulp/task/sprite`);
const watch = require(`./gulp/task/watch`);
const hash = require(`./gulp/task/hash`);
const dep = require(`./gulp/task/deploy`);
const vendor = require(`./gulp/task/vendor`);

module.exports.dev = gulp.series(
    clean,
    gulp.parallel(
        html,
        favicon,
        fonts,
        images,
        style,
        scripts,
        sprite,
        vendor
    ),
    gulp.parallel(
        serve,
        watch
    )
);

module.exports.build = gulp.series(
    clean,
    gulp.parallel(
        html,
        favicon,
        fonts,
        images,
        style,
        scripts,
        sprite,
        vendor
    ),
    hash
);

module.exports.deploy = gulp.series(
    dep
);

module.exports.ghp = (cb) => {
  ghpages.publish(`./dist`, cb);
};
