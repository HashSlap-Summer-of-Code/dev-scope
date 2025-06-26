# 🧭 DevScope – HSSoC Contributor Dashboard

<p align="center">
  <img src="https://img.shields.io/github/license/HashSlap-Summer-of-Code/dev-scope?color=brightgreen&label=LICENSE&style=flat-square" />
  <img src="https://img.shields.io/github/forks/HashSlap-Summer-of-Code/dev-scope?style=flat-square&color=gray" />
  <img src="https://img.shields.io/github/stars/HashSlap-Summer-of-Code/dev-scope?style=flat-square&color=blue" />
  <img src="https://img.shields.io/github/issues/HashSlap-Summer-of-Code/dev-scope?style=flat-square&color=green" />
  <img src="https://img.shields.io/github/issues-pr/HashSlap-Summer-of-Code/dev-scope?style=flat-square&color=gold" />
  <a href="https://dev-scope.netlify.app/">
    <img src="https://img.shields.io/badge/Live-Demo-brightgreen?style=flat-square&logo=netlify" />
  </a>
</p>

### 🌐 Live: [dev-scope.netlify.app](https://dev-scope.netlify.app)

> **DevScope** is a minimal, web-based GitHub contributor showcase built for the **HashSlap Summer of Code (HSSoC)**. It allows contributors to add their GitHub profiles and automatically displays their avatars, usernames, and **top programming languages** using GitHub's public APIs.

---

## ✨ Features

- 🔍 **Searchable Grid View** of all contributors
- 🧠 **Top Languages Analysis** using GitHub API
- 🖼️ Clean, terminal-inspired UI
- 🔧 No backend — built with HTML + JS + JSON
- ⚡ Fast & lightweight — deploys easily on Netlify/Vercel
- 👥 Community-driven — contributors add themselves via `contributors.json`

---

## 📸 Preview

![Preview Screenshot](https://raw.githubusercontent.com/HashSlap-Summer-of-Code/dev-scope/main/assets/preview.png)

---

## 🚀 Getting Started

To preview the project locally, you don't need to install Node.js or use any build tools.

### 🔹 Option 1: Use Live Server (Recommended for Beginners)

💡 If you're using VS Code or a similar editor, install the **Live Server** extension to quickly view the site in your browser:

1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code.
2. Open the project folder in your editor.
3. Right-click on `index.html` and choose **"Open with Live Server"**.

Your browser will automatically open the site and refresh on changes.

---

### 🔹 Option 2: Open Manually

You can also open the `index.html` file directly in your browser without any extensions.


### Troubleshooting
- Ensure no other processes are using port 8080
- If changes are not reflected, hard refresh your browser:
  - Windows/Linux: Press `Ctrl + F5`
  - Mac: Press `Cmd + Shift + R`
- If you see a blank page or missing data:
  1. Open Developer Tools (F12 or right-click -> Inspect)
  2. Go to Network tab
  3. Check 'Disable cache' checkbox
  4. Refresh the page

---

## Project Structure
- **contributors.json**: List of GitHub usernames
- **src/index.html**: Main HTML file
- **src/script.js**: JavaScript to fetch and display data
- **src/style.css**: Styling for the page

---

## 🚀 How to Contribute

1. **Fork** this repository

2. **Clone** it:
   ```bash
   git clone https://github.com/your-username/dev-scope.git
   cd dev-scope
   ```


   ```json
   ["your-github-username", "another-contributor", "Siddhram"]
   ```

4. **Preview Your Changes Locally:**

   - Install the "Live Server" extension in VS Code (or your preferred code editor)
   - Right-click on `src/index.html` and select "Open with Live Server"
   - Your browser will automatically open with the preview
   - No need to install Node.js or run any build tools! 🎉

5. **Update the screenshot (Optional but Recommended!):** Replace `assets/preview.png` with a new screenshot that includes your profile card. This makes your contribution visible directly in the README.

6. **Commit and Push**

7. **Create a Pull Request**

Once merged, your profile will appear on the website within minutes!

---

## Known Issues
- CORS might block GitHub API requests in some environments
- API rate limits might cause delays

---

## 🧰 Tech Stack

- HTML / CSS / JavaScript
- GitHub REST API v3
- JSON-based contributor input
- Deployed on **Netlify**

---

## 💡 Why DevScope?

This project was born out of the desire to give HSSoC contributors a **simple yet impactful way** to showcase their GitHub presence — without needing to write backend code or configure databases.

---

## 👨‍💻 Made With ❤️ for HSSoC

DevScope is an open-source effort by the HashSlap Summer of Code community. Contributions, feedback, and stars are always welcome!

---

## 📄 License

MIT License © 2025 [HashSlap Summer of Code](https://github.com/HashSlap-Summer-of-Code)

---

