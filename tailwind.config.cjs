const { default: daisyui } = require("daisyui");

module.exports = {
  daisyui: {
    themes: [
      {
        primary: {
          "primary": "#0000ff",
          "primary-content": "#c6dbff",

          "secondary": "#00a6c8",
          "secondary-content": "#000a0f",

          "accent": "#00e7ff",
          "accent-content": "#001316",

          "neutral": "#444466",
          "neutral-content": "#d6d7df",

          "base-100": "#111122",
          "base-200": "#0d0d1c",
          "base-300": "#090916",
          "base-content": "#c9c9ce",

          "info": "#00ebff",
          "info-content": "#001316",

          "success": "#009a71",
          "success-content": "#000904",

          "warning": "#ff7a00",
          "warning-content": "#160500",

          "error": "#ff3d6c",
          "error-content": "#160104",
        },
      },
    ],
  },
  content: ["./node_modules/saraui/**/*.{html,js,svelte,ts}", "./src/**/*.{svelte,js,ts}"],
  plugins: [require("daisyui")],
};
