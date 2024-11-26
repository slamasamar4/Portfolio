
# Guide to Deploy the React Project on GitHub Pages

Follow these steps to deploy your React project to GitHub Pages, using the `main` branch for deployment:

---

### Step 1: Prepare the Project
1. Open the `package.json` file.
2. Add the following line to specify your GitHub Pages URL:
   ```json
   "homepage": "https://<your-username>.github.io/<repository-name>/"
   ```
   Replace `<your-username>` with your GitHub username and `<repository-name>` with your repository name.

---

### Step 2: Build the Project
Run the following command in your project directory to generate the production build:
```bash
npm run build
```
This creates a folder called `build` containing all the necessary static files.

---

### Step 3: Move Build Files to the Root
To serve the project directly from the `main` branch:
1. Navigate to the `build` folder in your project directory.
2. Copy all the files from `build` and paste them into the root of your repository (where `package.json` is located).
3. Make sure you do not copy the `build` folder itself, only its contents.

---

### Step 4: Push the Changes to GitHub
1. Stage all changes:
   ```bash
   git add .
   ```
2. Commit the changes:
   ```bash
   git commit -m "Deploy React app to GitHub Pages"
   ```
3. Push the changes to the `main` branch:
   ```bash
   git push origin main
   ```

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
