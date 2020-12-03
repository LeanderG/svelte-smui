/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",

    src: "/_dist_",
  },
  plugins: ["@snowpack/plugin-svelte"],
  install: [
    /* ... */
  ],
  installOptions: {
    rollup: {
      plugins: [
        require("rollup-plugin-svelte")({
          emitCss: true,
        }),
        require("rollup-plugin-postcss")({
          extract: true,
          minimize: true,
          use: [
            [
              "sass",
              {
                includePaths: ["./src/theme", "./node_modules"],
              },
            ],
          ],
        }),
      ],
    },
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
