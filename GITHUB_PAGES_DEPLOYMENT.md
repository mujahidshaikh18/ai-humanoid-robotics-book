# GitHub Pages Deployment Guide

## Current Issue
The site at https://mujahidshaikh18.github.io/ai-humanoid-robotics-book/ is showing a 404 error because GitHub Pages has not been properly configured or deployed.

## Solution Options

### Option 1: GitHub Actions (Recommended)
The workflow file `.github/workflows/deploy.yml` has been created to automatically deploy your Docusaurus site to GitHub Pages when changes are pushed to the main branch.

### Option 2: Manual Deployment
If you prefer to deploy manually, you can run:

```bash
npm run build
npm run deploy
```

This will build your site and push it to the `gh-pages` branch.

### Option 3: Using GitHub UI
1. Go to your repository settings on GitHub
2. Scroll down to the "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Select "gh-pages" as the branch and "/ (root)" as the folder
5. Click "Save"

## GitHub Pages Configuration in Docusaurus
The `docusaurus.config.js` file is properly configured with:
- `baseUrl: '/ai-humanoid-robotics-book/'`
- `organizationName: 'mujahidshaikh18'`
- `projectName: 'ai-humanoid-robotics-book'`

## Next Steps
1. Commit and push the new GitHub Actions workflow file
2. Ensure GitHub Pages is enabled in your repository settings
3. Wait for the GitHub Actions workflow to run and deploy the site
4. The site should be accessible at https://mujahidshaikh18.github.io/ai-humanoid-robotics-book/

## Troubleshooting
- If the site still doesn't work after deployment, check that the GitHub Pages source is set to the `gh-pages` branch
- Verify that the workflow ran successfully in the Actions tab of your repository
- Make sure there are no build errors in the workflow logs