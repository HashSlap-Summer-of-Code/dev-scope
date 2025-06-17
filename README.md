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

> **DevScope** is a minimal, web-based GitHub contributor showcase built for the **HashSlap Summer of Code (HSSoC)**. It allows contributors to add their GitHub profiles and automatically displays their avatars, usernames, and **top programming languages** using GitHub’s public APIs.

---

## ✨ Features

* 🔍 **Searchable Grid View** of all contributors
* 🧠 **Top Languages Analysis** using GitHub API
* 🖼️ Clean, terminal-inspired UI
* 🔧 No backend — built with HTML + JS + JSON
* ⚡ Fast & lightweight — deploys easily on Netlify/Vercel
* 👥 Community-driven — contributors add themselves via `contributors.json`

---

## 📸 Preview

![Preview Screenshot](https://raw.githubusercontent.com/HashSlap-Summer-of-Code/dev-scope/main/assets/preview.png)

---

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or npx

### Installation
1. **Clone** the repository:
   ```bash
   git clone https://github.com/your-username/dev-scope.git
   cd dev-scope
   ```

### Running the Development Server
1. **Start the server**:
   ```bash
   npx http-server 
   ```

2. **Open your browser** and navigate to:
   - [http://127.0.0.1:8080/src/index.html](http://127.0.0.1:8080/src/index.html)

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

3. **Add your GitHub username** to the `contributors.json` file:
   ```json
   [
     "your-github-username",
     "another-contributor"
   ]
   ```

4. **Commit and Push**

5. **Create a Pull Request**

Once merged, your profile will appear on the website within minutes!

---

## Known Issues
- CORS might block GitHub API requests in some environments
- API rate limits might cause delays

---

## 🧰 Tech Stack

* HTML / CSS / JavaScript
* GitHub REST API v3
* JSON-based contributor input
* Deployed on **Netlify**

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

