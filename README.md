# ✨ Interactive Developer Portfolio | M. P. B. Kalpana

A premium, highly responsive personal portfolio website showcasing professional software engineering projects, interactive UI/UX Figma case studies, and enterprise backend framework expertise. 

Designed with a sleek dark/light mode, custom glassmorphism components, and fluid animations.

---

## 🚀 Key Features

* **⚡ Zero-Dependency Hash Router**: Built a custom, lightweight hash-based router (`#/project/:id`) in React, keeping page sizes tiny while enabling distinct shareable URLs for individual case studies.
* **📱 Adaptive Bezel Simulator**: Programmatically renders mobile app screenshots within responsive portrait smartphone mockups, mimicking real-world devices.
* **📺 Dynamic Video Embedder**: Auto-detects YouTube URLs in the project logs, extracts video IDs, and converts them to responsive `<iframe>` streams. Safely falls back to local HTML5 `<video>` tags with deferred `preload="metadata"` settings.
* **💫 Fluid Animations & Glows**: Uses **Framer Motion** for smooth viewport entry reveals, alongside custom CSS variables mapping dynamic HSL border-glows depending on skill categories.
* **🌗 Intelligent Dark/Light Mode**: Persisted color themes via `localStorage` with smooth transition sweeps and custom vector icon sets.
* **📈 SEO & OpenGraph Optimized**: Pre-configured social media card headers for optimized previews when sharing your link on LinkedIn or X.

---

## 🛠️ Technology Stack

* **Core**: React 19, TypeScript, Vite
* **Styling & Motion**: Vanilla CSS3 (Dynamic HSL variables), Framer Motion
* **Utilities**: Lucide React (Icons)
* **Configuration**: ESLint (Type-aware linting), TypeScript configurations

---

## 📂 Project Structure

```bash
├── public/               # Asset catalog (images, branding logos, optimized video files)
├── src/
│   ├── assets/           # Secondary static design vectors
│   ├── components/       # Reusable React UI Blocks (Hero, About, Skills, Projects, etc.)
│   ├── data/             # Centralized schemas (projects data, tech configurations)
│   ├── App.tsx           # Application logic, router listener, and theme providers
│   ├── main.tsx          # Client bootstrapper
│   └── index.css         # Global variables, fonts, and scrollbar layouts
├── netlify.toml          # Pre-configured deployment settings
├── vite.config.ts        # Vite custom bundler settings
└── tsconfig.json         # Strict TypeScript compiler definitions
```

---

## 💻 Local Execution Guide

To run this project locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Praveena32/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

4. **Compile production build**:
   ```bash
   # Compiles and optimizes code inside /dist folder
   npm run build
   ```

---

## 🌐 Production Deployment

This project is pre-optimized for **Netlify** or **Vercel** static hostings:
* Auto-compiles via `npm run build`.
* Redirects all subpage queries back to `index.html` to allow React SPA hash-routing to execute cleanly.
* Automatically updates on every new commit pushed to the `main` branch.
