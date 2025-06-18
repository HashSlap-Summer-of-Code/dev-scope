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

## 🚀 How to Contribute

1. **Fork** this repository

2. **Clone** it:

   ```bash
   git clone https://github.com/<your-username>/dev-scope.git
   cd dev-scope
   ```

3. **Add your GitHub username** to the `contributors.json` file. We've successfully added "Siddhram" as an example!

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
