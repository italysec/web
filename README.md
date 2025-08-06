# ItalySec Website

La community italiana di professionisti dell'IT Security

## 🚀 About

ItalySec è una community di professionisti dell'IT Security che si riunisce su Slack per condividere informazioni, opinioni ed eventi in un ambiente trusted.

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type safety and better DX
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing

## 📋 Features

- **Modern Architecture**: Component-based, TypeScript-first
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Framer Motion powered
- **SEO Optimized**: Meta tags and Open Graph
- **Accessibility**: WCAG compliant
- **Performance**: Optimized bundle and lazy loading
- **GitHub Pages Ready**: Automated deployment
- **Easter Egg**: Hidden feature for community members

## 🥚 Easter Egg

The website includes a hidden feature accessible via browser console:

- `inv1t3()` - Reveals contact information for requesting invites

## 🛠️ Development

### Prerequisiti

- Node.js >= 18.0.0
- npm >= 8.0.0

### Installazione

```bash
# Clona il repository
git clone https://github.com/italysec/italysec.github.io.git
cd italysec.github.io

# Installa le dipendenze
npm install
```

### Scripts Disponibili

```bash
# Sviluppo locale
npm run dev

# Build per produzione
npm run build

# Preview build
npm run preview

# Linting
npm run lint
npm run lint:fix

# Type checking
npm run type-check

# Formattazione codice
npm run format

# Test
npm run test

# Deploy su GitHub Pages
npm run deploy
```

## 📁 Struttura del Progetto

```
italysec-website/
├── src/
│   ├── components/          # Componenti riutilizzabili
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Layout.tsx
│   ├── pages/              # Pagine dell'applicazione
│   │   ├── HomePage.tsx
│   │   └── RulesPage.tsx
│   ├── App.tsx             # Componente principale
│   ├── main.tsx            # Entry point con Easter egg
│   └── index.css           # Stili globali
├── public/                 # Asset statici
│   ├── isec.png           # Logo community
│   └── logo.svg           # Logo SVG
├── dist/                   # Build output
└── docs/                   # GitHub Pages (build)
```

## 🎨 Design System

### Colori
- **Primary**: Dark theme with secondary shades
- **Background**: `secondary-900` (dark)
- **Cards**: `secondary-800` with borders
- **Text**: `secondary-100` (light) to `secondary-500` (muted)

### Typography
- **Font**: Inter (UI) + JetBrains Mono (code)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Button**: Multiple variants with icons
- **Card**: Hover effects and animations
- **Layout**: Responsive header/footer

## 🚀 Deployment

### GitHub Pages
The site is automatically deployed to GitHub Pages via GitHub Actions:

1. **Push to main** triggers build
2. **Build process** creates optimized bundle
3. **Deploy** to `https://italysec.github.io`

### Manual Deploy
```bash
npm run deploy
```

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

For community access and questions, see the Easter egg or contact existing members.

---

**ItalySec** - Community privata di professionisti dell'IT Security © 2016-2025