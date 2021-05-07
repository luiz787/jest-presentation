const { add } = require('./calculator/calculator.js');
const { getAmountOfRepositories } = require('./github/githubRepository.js');

// console.log('Hello, World!');
// console.log(add(1,2));

async function fetchAmountOfRepositories(username) {
    try {
        const amountOfRepositories = await getAmountOfRepositories(username)
        console.log(`${username} has ${amountOfRepositories} repositories on GitHub`);
    } catch (err) {
        console.log('Failed to get repositories from GitHub');
    }
}

(async () => {
    await fetchAmountOfRepositories('luiz787');
})();
