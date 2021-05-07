import { add } from './calculator/calculator.js';
import { getAmountOfRepositories } from './github/githubRepository.js';

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

await fetchAmountOfRepositories('luiz787');
