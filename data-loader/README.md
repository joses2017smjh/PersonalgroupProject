# Bathroom Data Loader

Load data into bathrooms. To run, navigate to this directory (`/data-loader`).

Then, run the following command:

```sh
npx esbuild src/index.js --outfile=src/index-build.js --bundle
```

Then, open `src/index.html` with a local web server. Do not spam-refresh this because it will load 1000+ bathrooms into the database every single time you load it!
