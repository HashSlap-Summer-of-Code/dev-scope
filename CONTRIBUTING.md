# 🚀 Contributing to Dev-Scope

Welcome! Dev-Scope is part of **HashSlap Summer of Code (HSSoC)** and is perfect for first-time contributors. This guide will help you make your first contribution.

## Table of Contents
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Contributions](#making-contributions)
- [Code Style Guidelines](#code-style-guidelines)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Community Guidelines](#community-guidelines)

## Getting Started

1. **⭐ Star the Repository**
   - Show your support by starring the repository

2. **Fork the Repository**
   - Click the 'Fork' button at the top right of this repository
   - This creates your own copy of the repository

3. **Clone Your Fork**
   ```bash
   git clone https://github.com/<your-username>/dev-scope.git
   cd dev-scope
   ```

4. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/HashSlap-Summer-of-Code/dev-scope.git
   ```

## Development Setup

1. **Prerequisites**
   - Node.js (v14 or later)
   - npm or npx
   - A code editor (VS Code recommended)

2. **Local Development Server**
   ```bash
   npx http-server
   ```

3. **View the Site**
   - Open http://127.0.0.1:8080/src/index.html
   - If changes don't appear, hard refresh (Ctrl + F5 on Windows/Linux, Cmd + Shift + R on Mac)

## Making Contributions

### Types of Contributions
1. **Code Contributions**
   - Bug fixes
   - New features
   - Performance improvements
   - Code cleanup and refactoring

2. **Documentation**
   - README improvements
   - Code comments
   - Contributing guidelines
   - Documentation fixes

3. **Design**
   - UI improvements
   - Accessibility enhancements
   - Responsive design fixes

### Contribution Process
1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-fix-name
   ```

2. **Make Your Changes**
   - Keep changes focused and atomic
   - Follow the code style guidelines
   - Add comments where necessary

3. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "type: brief description of changes"
   ```
   Commit message types:
   - feat: New feature
   - fix: Bug fix
   - docs: Documentation changes
   - style: Code style/formatting
   - refactor: Code refactoring
   - test: Adding tests
   - chore: Maintenance tasks

4. **Stay Updated**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

## Code Style Guidelines

### HTML
- Use semantic HTML elements
- Include proper alt text for images
- Keep indentation consistent (2 spaces)

### CSS
- Use meaningful class names
- Follow BEM naming convention
- Keep selectors simple and maintainable

### JavaScript
- Use ES6+ features when appropriate
- Add comments for complex logic
- Follow camelCase naming convention
- Keep functions small and focused

## Testing

1. **Manual Testing**
   - Test in multiple browsers
   - Check mobile responsiveness
   - Verify all features work as expected

2. **Cross-browser Testing**
   - Chrome (latest)
   - Firefox (latest)
   - Safari (latest)
   - Edge (latest)

## Pull Request Process

1. **Create Pull Request**
   - Use a clear, descriptive title
   - Fill out the PR template
   - Link related issues

2. **PR Description Should Include**:
   - What changes were made
   - Why the changes were made
   - How to test the changes
   - Screenshots (if applicable)

3. **Review Process**
   - Address reviewer comments
   - Make requested changes
   - Keep discussions focused

4. **After Merge**
   - Delete your branch
   - Celebrate your contribution! 🎉

## Community Guidelines

1. **Be Respectful**
   - Treat all contributors with respect
   - Be patient with newcomers
   - Accept constructive criticism

2. **Communication**
   - Keep discussions on-topic
   - Use clear, concise language
   - Ask questions if unclear

3. **Support**
   - Help others when you can
   - Share knowledge
   - Point to relevant documentation

## Need Help?

- Join our [Discord](https://discord.gg/s5hmmAMeTD)
- Check existing issues and PRs
- Ask questions in discussions

---

Thank you for contributing to Dev-Scope! 💙

