module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 24rem))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 25rem))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      padding: {
        "1/3": "33.33333%",
        "2/3": "66.66667%",
      },
    },
  },
  plugins: [
    require("daisyui")
  ],

  daisyui: {
    styled: true,
    themes: ["cupcake", "cmyk"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    
  },

}
