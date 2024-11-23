const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      screens: {
         sm: "640px",
         md: "768px",
         lg: "1024px",
         xl: "1278px",
         xxl: "1399px",
      },
      extend: {
         colors: {
            // "[rgb(255,235,59)]": "rgb(255,235,59)",
         },
      },
   },

   plugins: [],
});
//
