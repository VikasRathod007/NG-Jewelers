# GitHub Pages Deployment Guide

## Prerequisites

1. Repository is public (or you have GitHub Pro/Team for private repos)
2. GitHub Actions are enabled for your repository

## Step-by-Step Deployment Instructions

### 1. Enable GitHub Pages

1. Go to your repository: `https://github.com/VikasRathod007/NG-Jewelers`
2. Click on **Settings** (top right of repository)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: `GitHub Actions`
5. Click **Save**

### 2. Verify Workflow File

The workflow file `.github/workflows/deploy.yml` is already configured correctly. It will:

- Build the site when you push to `main` branch
- Deploy to GitHub Pages automatically

### 3. Push Your Code

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 4. Monitor Deployment

1. Go to **Actions** tab in your repository
2. You should see a workflow run called "Deploy NG Jewellers site"
3. Click on it to see the build progress
4. Wait for both jobs to complete:
   - ✅ `build` job (builds the site)
   - ✅ `deploy` job (deploys to GitHub Pages)

### 5. Access Your Site

Once deployment is complete, your site will be available at:

```
https://vikasrathod007.github.io/NG-Jewelers/
```

## Troubleshooting

### If deployment fails:

1. **Check Actions Logs**:
   - Go to **Actions** tab
   - Click on the failed workflow run
   - Check the error messages in the logs

2. **Common Issues**:
   - **Node version**: The workflow uses Node 20, which should work
   - **Build errors**: Check if `pnpm build` works locally
   - **Permissions**: Make sure GitHub Pages is enabled in Settings

3. **Verify Build Locally**:

   ```bash
   pnpm install
   pnpm build
   ```

   If this fails locally, fix the errors first.

4. **Check Base Path**:
   - The base path is set to `/NG-Jewelers/` in the workflow
   - If your repository name is different, update it in `.github/workflows/deploy.yml`

## Manual Deployment (Alternative)

If automatic deployment doesn't work, you can deploy manually:

1. Build locally:

   ```bash
   export VITE_BASE_PATH=/NG-Jewelers/
   pnpm build
   ```

2. Push the `dist` folder to `gh-pages` branch:

   ```bash
   git subtree push --prefix dist origin gh-pages
   ```

3. In GitHub Settings > Pages, select `gh-pages` branch as source.

## Notes

- The site uses React Router, so you need a `404.html` file for client-side routing to work
- The workflow automatically handles this
- First deployment may take 5-10 minutes
- Subsequent deployments are faster (2-3 minutes)
