# Fairing
Fairing is a small project providing boilerplate code to kickstart frontend projects.
It uses [Laravel Mix](https://laravel-mix.com/) as an abstraction around Webpack, allowing modern
features and tooling out of the box.

## Setup
For Fairing to work properly, first copy and prepare the .env file.
``` bash
cp .env.example .env
```

Next install the dependencies and you're ready to go.
``` bash
npm install
```

If you build only the frontend and won't integrate it into another project. You can start
a Nginx container, acting as the development WebServer. This Container will get extended
upon in the future, allowing it to be deployed easily.
``` bash
docker-compose up
```

## NPM Scripts
-   `dev` Runs the full build in development mode
-   `watch` Watches the files for change and runs the development build
-   `hot` Watches the files and hot replaces changed modules
-   `prod` Runs the full build in production mode

## Environment
-   `MIX_PROXY_URL` \
    Proxy URL for the Browsersync feature. Is routed to the docker container in the .env.example file. \
    Change this to your development URL, if you integrate this project into another (like a CMS).
-   `MIX_DIST_PATH` \
    Relative path from this file to the desired dist folder.
-   `MIX_ABS_DIST_PATH` \
    Path from the webroot to the dist folder. Is routed to the docker container in the .env.example. \
    Change this to your specific webroot, if you integrate this project into another (like a CMS).
