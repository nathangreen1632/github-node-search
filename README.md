# GitHub Node.js Repository Checker

This project provides a straightforward way to scan all of your public GitHub repositories and identify which of them utilize Node.js by checking for the presence of a `package.json` file.

---

## Required Files

Your project should contain the following files:

- `checkNodeRepos.js` *(main script)*
- `.env` *(environment variables file)*
- `.gitignore` *(optional but recommended)*

**Example `.env` file:**
```env
GITHUB_TOKEN=your_github_token_here
```

**Example `.gitignore` file:**
```
.env
node_modules
```

---

## How to Build the Project

### Step 1: Create Project Directory

```bash
mkdir github-node-checker
cd github-node-checker
```

### Step 2: Initialize Node.js

Run the following command to create your initial `package.json` file:
```bash
npm init -y
```

### Step 3: Install Dependencies

Install the necessary dependencies with this command:

```bash
npm install @octokit/rest dotenv
```

### Step 4: Create Environment File

Create your `.env` file to securely store your GitHub token:

```bash
touch .env
```

Add your GitHub Personal Access Token to this file as shown in the example above.

**Make sure your `.env` file is included in your `.gitignore` file to protect your credentials from accidental commits.**

---

## Running the Script

Execute the script using:

```bash
node checkNodeRepos.js
```
OR

You can execute using `npm` by creating a `start` script in your package.json:

```bash
"start": "node checkNodeRepos.js"
```
Then run:

```bash
npm run start
```

This will output a clean list of repositories that use Node.js by detecting the presence of a `package.json` file.

---

## Expected Output

When the script runs successfully, your terminal will display output similar to:

```
applicant-manager uses Node.js.
Bookle uses Node.js.
CareerGist uses Node.js.
kanban-board uses Node.js.
recipe-planner uses Node.js.
socialNetwork uses Node.js.
sticky-cheese uses Node.js.
vehicle-builder uses Node.js.
weather-dashboard uses Node.js.
```

Only repositories that contain a `package.json` file (indicating Node.js usage) will be listed, ensuring a concise and focused report.

---

## ⚠️ Important Security Note

- **Never** commit your `.env` file to version control.
- Ensure your GitHub token remains private at all times.
- Revoke and regenerate tokens periodically for maximum security.

---

## Useful Links

- [GitHub Personal Access Token Creation](https://github.com/settings/tokens)
- [Octokit REST Documentation](https://octokit.github.io/rest.js/)
