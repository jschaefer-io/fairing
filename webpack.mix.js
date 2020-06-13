const mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/');
mix.sass('src/scss/app.scss', 'dist/');

/**
 * Sets general options, where the dist files are
 * being generated. This can be configured in the
 * .env file
 */
mix.setPublicPath(process.env.MIX_DIST_PATH)
    .setResourceRoot(process.env.MIX_ABS_DIST_PATH)
    .extract();

/**
 * Adds version strings to the mix-manifest.json
 * for production mode only
 */
if (process.env.NODE_ENV === 'production') {
    mix.version();
}

/**
 * Basic browser sync implementation
 * the proxy url gets fetched from the
 * .env file
 */
mix.browserSync({
    proxy: process.env.MIX_PROXY_URL
});
