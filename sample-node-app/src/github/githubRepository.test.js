const { default: axios } = require("axios");
const { getAmountOfRepositories } = require("./githubRepository.js");

jest.mock("axios");

describe("GithubRepository tests", () => {
  test("Checks if axios.get is called with the expected username", (done) => {
    axios.get.mockResolvedValueOnce({
      status: 200,
      data: {
        length: 1,
      },
    });

    getAmountOfRepositories("luiz787").then((data) => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://api.github.com/users/luiz787/repos"
      );

      done();
    });
  });
});
