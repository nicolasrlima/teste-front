const config = {
  development: {
    URL: "http://localhost:3000/",
  },
  production: {
    URL: "https://agile-peak-49760.herokuapp.com/",
  },
};

export default config[process.env.NODE_ENV];
