
# Portfolio - Automated Deployment to GitHub Pages

This portfolio automatically deploys to GitHub Pages whenever you push to the `main` branch.

---

## 🚀 Automated Deployment (CI/CD)

Your portfolio is configured with **GitHub Actions** for automatic deployment. Simply push your changes and the site updates automatically!

### How it works:
1. Make changes to your portfolio
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Update portfolio"
   ```
3. Push to GitHub:
   ```bash
   git push origin main
   ```
4. GitHub Actions automatically builds and deploys your site to:
   **https://slamasamar4.github.io/Portfolio/**

---

## 🛠️ Local Development

### Install dependencies:
```bash
npm install
```

### Run development server:
```bash
npm start
```
The site will open at `http://localhost:3000`

### Build for production:
```bash
npm run build
```

---

## 📋 One-Time Setup (Already Done)

If you need to set this up for a new repository:

1. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

2. Ensure `package.json` has the correct homepage:
   ```json
   "homepage": "https://<username>.github.io/<repository-name>/"
   ```

---

## 🔧 Manual Deployment (Optional)

If you want to deploy manually using gh-pages:
```bash
npm run deploy
```

---

## 📁 Project Structure
```
Portfolio/
├── src/              # React source files
├── public/           # Static files
├── .github/
│   └── workflows/
│       └── deploy.yml  # CI/CD configuration
└── package.json
```

---

## 🎯 Features
- ✅ Automatic deployment on push to main
- ✅ React 18
- ✅ GitHub Pages hosting
- ✅ Responsive design
- ✅ Modern portfolio layout

---

### Step 5: Configure GitHub Pages
1. Go to your repository on GitHub.
2. Click on the **Settings** tab.
3. Scroll down to the **Pages** section.
4. Set the source to `main` and select the `/ (root)` folder.
5. Click **Save** to confirm.

---

### Step 6: Access the Deployed Site
After a few minutes, your site will be live at:
```
https://<your-username>.github.io/<repository-name>/
```

---

### Notes
- Ensure your browser cache is cleared when checking for updates.
- If you make changes to the project, repeat Steps 2–4 to update the deployed site.

Let me know if you need further clarifications!
