# Deploying to Vercel

## Quick Deployment Options

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project directory**:
   ```bash
   cd vandan-portfolio
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? **Yes**
   - Which scope? (select your account)
   - Link to existing project? **No** (for first deployment)
   - Project name: **vandan-portfolio** (or your choice)
   - Directory: **./** (current directory)
   - Override settings? **No**

5. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard (Git Integration)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in

3. **Click "Add New Project"**

4. **Import your GitHub repository**

5. **Configure the project**:
   - Framework Preset: **Vite** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)

6. **Click "Deploy"**

Vercel will automatically:
- Build your project
- Deploy it to a production URL
- Set up automatic deployments on every push to main branch

### Option 3: Deploy via Vercel Dashboard (Manual Upload)

1. **Build the project locally**:
   ```bash
   npm run build
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in

3. **Click "Add New Project"**

4. **Drag and drop the `dist` folder** (after building)

5. **Deploy!**

## Configuration

The `vercel.json` file is already configured for:
- ✅ Correct build output directory (`dist`)
- ✅ Single Page Application (SPA) routing
- ✅ Vite framework detection

## Environment Variables

If you need environment variables in the future:
1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

## Custom Domain

To add a custom domain:
1. Go to your project on Vercel
2. Navigate to "Settings" > "Domains"
3. Add your domain
4. Follow DNS configuration instructions

## Notes

- Your portfolio will be available at: `https://your-project-name.vercel.app`
- Automatic HTTPS is enabled
- The site will automatically rebuild and redeploy on every Git push (if using Git integration)
- Theme preference (localStorage) will persist per user

