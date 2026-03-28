# 💻 Sahil Chaudhari - Portfolio Terminal

> A modern, interactive terminal-themed portfolio website built with React and Vite.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.2.8-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

![Terminal Portfolio](https://img.shields.io/badge/Theme-Terminal-brightgreen)
![Dark Mode](https://img.shields.io/badge/Mode-Dark%20%7C%20Light-blue)

---

## ✨ Features

### 🎨 Interactive Terminal Interface
- **Command-line experience** - Type commands just like a real terminal
- **Dark & Light mode** - Toggle between themes with a click or command
- **Smooth animations** - Modern UI with elegant transitions
- **Responsive design** - Works perfectly on all devices

### 📋 Portfolio Sections
- **Experience** - Work history and achievements
- **Projects** - Showcase of your best work
- **Skills** - Technical expertise
- **Education** - Academic background
- **Contact** - Get in touch information

### 🚀 Available Commands

| Command | Description | Aliases |
|---------|-------------|---------|
| `help` | Show all available commands | - |
| `about` | Display about information | `whoami` |
| `experience` | View work experience | `exp` |
| `projects` | View projects | `proj` |
| `skills` | View technical skills | - |
| `education` | View education details | `edu` |
| `contact` | Show contact information | `email` |
| `github` | Open GitHub profile | - |
| `linkedin` | Open LinkedIn profile | - |
| `resume` | Display full resume summary | - |
| `theme` | Toggle between dark and light mode | - |
| `clear` | Clear terminal screen | - |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20.11.0 or higher
- npm 10.2.4 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd vandan-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Customization

### Update Portfolio Information

Edit `src/data/portfolioData.js` to customize:

- Personal information (name, role, location)
- Contact details (email, phone, social links)
- Work experience
- Projects
- Skills
- Education

### Styling

The terminal theme is fully customizable via `src/App.css`:

- **Dark Mode Colors:**
  - Background: `#0a0a0a`
  - Primary text: `#00ff41` (Green)
  - Secondary text: `#00d4ff` (Cyan)
  - Accent: `#00ff41`

- **Light Mode Colors:**
  - Background: `#f5f5f5`
  - Primary text: `#003366` (Dark Blue)
  - Secondary text: `#0066cc` (Blue)
  - Accent: `#0066cc`

### Adding New Commands

1. Add command logic in `src/App.jsx` (`executeCommand` function)
2. Update help text in `src/data/portfolioData.js`
3. Add command output formatting as needed

---

## 📁 Project Structure

```
sahil-portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── data/
│   │   └── portfolioData.js  # Portfolio content
│   ├── App.jsx         # Main application component
│   ├── App.css         # Terminal styling
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── vercel.json         # Vercel deployment config
```

---

## 🌐 Deployment

### Deploy to Vercel

The easiest way to deploy this portfolio:

1. **Using Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Using Vercel Dashboard:**
   - Push code to GitHub
   - Import repository on [vercel.com](https://vercel.com)
   - Deploy automatically

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

---

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **Vite 5.2.8** - Build tool and dev server
- **CSS3** - Styling with modern features
- **JavaScript (ES6+)** - Modern JavaScript features

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Sahil Chaudhari**

- Software Engineer | Frontend Developer
- 📧 Email: chaudharisahil475@gmail.com
- 📍 Location: Pune, Maharashtra, India

---

## 🙏 Acknowledgments

- Inspired by terminal-based portfolio designs
- Built with modern web technologies
- Optimized for performance and user experience

---

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!

- 💼 [LinkedIn](https://www.linkedin.com)
- 💻 [GitHub](https://github.com)
- 📧 Email: chaudharisahil475@gmail.com

---

<div align="center">

**⭐ Star this repo if you found it helpful! ⭐**

Made with ❤️ by Sahil Chaudhari

</div>
