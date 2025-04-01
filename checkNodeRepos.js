import dotenv from 'dotenv';
import { Octokit } from "@octokit/rest";

dotenv.config();

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
    log: {
        debug: () => {},
        info: () => {},
        warn: () => {},
        error: () => {},
    },
});

async function checkNodeProjects(username) {
    const repos = await octokit.repos.listForUser({ username });
    for (const repo of repos.data) {
        try {
            await octokit.repos.getContent({
                owner: username,
                repo: repo.name,
                path: 'package.json',
            });
            console.log(`${repo.name} uses Node.js.`);
        } catch (error) {
            if (error.status !== 404) {
                console.error(`Unexpected error checking ${repo.name}:`, error.message);
            }
        }
    }
}

await checkNodeProjects('<insert_github_username>');