# Classic DVD Logo Screensaver

A lightweight, hardware-accelerated DVD bouncing logo screensaver built with modern HTML5, CSS3, and vanilla JavaScript.

🔗 **[Live Demo](https://youssefsallem.github.io/dvd-screensaver/)**

---

## 📸 Preview

![DVD Screensaver Demo](demo.gif)

---

## 🚀 Features

- **Smooth 60+ FPS Performance:** Uses CSS `transform: translate3d()` for hardware acceleration on the GPU, avoiding unnecessary layout reflows.
- **Dynamic Color Changes:** Bounces off screen boundaries and seamlessly cycles through vivid colors upon every impact.
- **Responsive Handling:** Calculates precise viewport bounds using `window.innerWidth` and `window.innerHeight` with hidden scrollbars.

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (Flexbox, GPU Compositing)
- **JavaScript (ES6+)** (`requestAnimationFrame`, `performance.now()`)

## ⚡ Quick Start

1. Clone or download this repository:
   ```bash
   git clone https://github.com/YoussefSallem/dvd-screensaver.git
