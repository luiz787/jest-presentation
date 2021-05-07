const { default: axios } = require("axios");
const { getAmountOfRepositories } = require("./githubRepository.js");

jest.mock("axios");

describe("GithubRepository tests", () => {
  test("Checks if axios.get is called with the expected username", () => {
    axios.get.mockResolvedValueOnce(() => ({
      status: 200,
      data: {
        length: 1,
      },
    }));

    // FIXME: teste bugado
    getAmountOfRepositories("luiz787").then((data) => {
      expect(axios.get).not.toHaveBeenCalledWith(
        "https://api.github.com/users/luiz787/repos"
      );

      // TODO: adicionar done
    });
  });
});
