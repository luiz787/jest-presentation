const axios = require("axios");

module.exports = {
  getAmountOfRepositories: async function getAmountOfRepositories(username) {
    let response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data.length;
  },
};
