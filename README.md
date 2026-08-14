# ✈️ Travel Journal

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

A fully responsive, interactive travel journal application built with **React.js**. This project elegantly showcases famous global destinations while demonstrating modern frontend engineering practices, including component-based architecture, CSS design tokens, advanced animations, and web accessibility (a11y).

## 📸 Previews
![Desktop Preview](readme_assets/Screenshot_2026-08-14_002925.jpg)
*Desktop View*

![Mobile Preview](readme_assets/Screenshot_20260814-003551.jpg)
*Mobile View*

## ✨ Features

*   🌗 **Seamless Theme Switching:** A custom dark/light mode toggle engineered using CSS Variables (Design Tokens) at the `:root` level for instant, performant theme swapping.
*   ✨ **Custom Glassmorphism Cursor:** A custom, hardware-accelerated radial-gradient cursor with a frosted glass (`backdrop-filter`) effect. 
*   📱 **Intelligent Responsiveness:** Utilizes CSS Grid and Flexbox for fluid layouts. Employs advanced media queries like `@media (pointer: coarse)` to gracefully disable custom cursors and hover states on mobile/touch devices, preventing common UX bugs.
*   📜 **Scroll-Driven Animations:** Utilizes modern CSS feature queries (`@supports (animation-timeline: view())`) to progressively enhance the UI with buttery-smooth, scroll-triggered card reveal animations.
*   ♿ **Accessible Design:** Implements explicit `:focus-visible` states to ensure full keyboard navigability for accessibility (WCAG compliance).

## 🛠️ Tech Stack

*   **Frontend Framework:** React.js (Functional Components, Hooks)
*   **Styling:** Pure CSS3 (Custom Properties, Grid, Flexbox, Animations)
*   **Icons:** FontAwesome
*   **Typography:** Inter (with `system-ui` fallback)

## 📂 Project Structure

Travel_Journal/
├── public/              # Static frontend assets (favicon, etc.)
├── readme_assets/       # Images used exclusively for GitHub documentation
├── src/
│   ├── assets/          # Images and other project assets
│   ├── Components/      # React components
│   │   ├── Actions.jsx  # Custom cursor logic & event listeners
│   │   ├── Header.jsx   # Navbar & Dark Mode toggle
│   │   └── MainContent.jsx # Renders destination cards
│   ├── Data/            # Data source folder
│   ├── App.jsx          # Root component assembly
│   ├── main.css         # Global styles, CSS Variables, and animations
│   └── main.jsx         # React DOM rendering entry point
├── index.html           # Main HTML file
├── package.json         # Project metadata and dependencies
├── README.md            # Project documentation
└── vite.config.js       # Vite configuration

```

## 🚀 Key Technical Implementations

### 1. Design Tokens (CSS Variables)

Instead of hard-coding colors, the application uses a scalable `:root` variable system. This makes maintaining themes, updating branding, and toggling dark mode highly efficient.

### 2. Device-Aware Styling

Hover states and custom cursors often break the mobile experience. This project uses precise media queries to ensure these interactions only happen on capable devices:

```css
/* Only applies hover effects if the device has a mouse/trackpad */
@media (hover: hover) { ... }

/* Disables the custom cursor on touchscreens */
@media (pointer: coarse) { .cursor { display: none; } }

```

### 3. Performance Optimization

The custom cursor tracks mouse movement using a React `useEffect` hook. To prevent frame-rate drops, the CSS utilizes `will-change: transform, left, top;`, offloading the rendering work to the device's GPU (Hardware Acceleration).

## 💻 Getting Started

To run this project locally:

1. **Clone the repository:**
```bash
git clone https://github.com/shubhamranwase/travel-journal.git

```


2. **Navigate to the directory:**
```bash
cd travel-journal

```


3. **Install dependencies:**
```bash
npm install

```


4. **Start the development server:**
```bash
npm run dev

```



## 👨‍💻 Author

**Shubham Ranwase**

* [LinkedIn](www.linkedin.com/in/shubham-ranwase)
* [GitHub](https://github.com/shubhamranwase)

---
