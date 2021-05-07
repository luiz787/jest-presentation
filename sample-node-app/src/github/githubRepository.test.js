const { default: axios } = require("axios");
const { getAmountOfRepositories } = require("./githubRepository.js");

jest.mock("axios");

expect.extend({
    toHaveBeenCalledOnce(received) {
        const calls = received.mock.calls.length
        const pass = calls === 1;

        if (pass) {
            return {
                message: () => `expected amount of calls to be different than one`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected only one call, got ${calls} calls instead`,
                pass: false,
            };
        }
    }
});

describe("GithubRepository tests", () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce({
      status: 200,
      data: {
        length: 1,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Checks if axios.get is called with the expected username", (done) => {
    getAmountOfRepositories("luiz787").then((data) => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://api.github.com/users/luiz787/repos"
      );

      done();
    });
  });

  test("Checks if axios.get is only called once", (done) => {
    getAmountOfRepositories("luiz787").then((data) => {
        // DO
        expect(axios.get).toHaveBeenCalledOnce();

        // DONT
        // expect(axios.get.mock.calls.length == 2).toBe(true);

      done();
    });
  });
});
