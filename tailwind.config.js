/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Roboto: "'Roboto', sans-serif;",
    },
    colors: {
      blue: "#4C72F1",
      white: "#fff",
      black: "#000",
      "light-blue": "#F4F9FE",
      transparent: "transparent",
    },
    backgroundImage: {
      "green-to-blue": "linear-gradient(180deg, #5EECC1 0%, #4EACDA 100%)",
      "orange-gradient": "linear-gradient(180deg, #FF864D 0%, #F06461 100%)",
      "blue-gradient": "linear-gradient(180deg, #4C72F1 0%, #2E54DD 100%)",
    },
    extend: {
      fontSize: {
        "45px": "45px",
      },
      lineHeight: {
        1: "1",
        "1_1": 1.1,
        "1_2": 1.2,
        "1_3": 1.3,
        "1_4": 1.4,
        "1_5": 1.5,
        "1_6": 1.6,
        "1_7": 1.7,
        "1_8": 1.8,
        "1_9": 1.9,
      },
      spacing: {
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
        "25px": "25px",
        "50px": "50px",
        "75px": "75px",
        "100px": "100px",
        "125px": "125px",
        "150px": "150px",
        "175px": "175px",
        "200px": "200px",
        "225px": "225px",
      },
      borderRadius: {
        "25px": "25px",
        "30px": "30px",
      },
    },
  },
  plugins: [],
};
