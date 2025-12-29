# Portfolio Website Migration: Next.js to Vanilla JavaScript

## Overview

This project represents a complete rewrite of my portfolio website, moving from a heavy Next.js/React stack to vanilla JavaScript with TypeScript and Vite. It resulted in **dramatically faster build times and improved page performance.**

## Why I Made the Switch

My portfolio is a relatively simple website that doesn't require the complexity of a full React framework. The overhead of Next.js was slowing down both development and production builds without providing substantial benefits for my use case.

## Performance Improvements

### Build Times
- **Before (Next.js):** 51 seconds
- **After (Vite + Vanilla JS):** 4 seconds
- **Result:** 92% faster builds

### Bundle Size
- **Before (Next.js):** ~110 kB per page + 102 kB shared chunks
- **After (Vite + Vanilla JS):** 37 kB gzipped total
- **Result:** 66% smaller payload to users

### Build Cache
- **Before:** 270.68 MB
- **After:** 50.62 MB
- **Result:** 81% smaller cache

### Page Performance
- No middleware overhead (eliminated 33.9 kB)
- No hydration overhead
- Faster initial page load
- Single optimized bundle
- Improved Lighthouse scores

## Tech Stack

### Before
- Next.js 15
- React 19
- Node.js server-side rendering
- Complex build pipeline

### After
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type safety without React overhead
- **Vanilla JavaScript** - No framework dependencies
- **Custom Client-Side Router** - Lightweight SPA routing
- **Web Components** - For reusable UI elements

## Key Features Implemented

### Custom Client-Side Router
Built a lightweight router from scratch that handles:
- History API navigation
- Dynamic route matching
- 404 handling
- Link interception for smooth SPA navigation

```typescript
const router = new Router("app");
router
  .addRoute("/", () => createPage(homeHtml))
  .addRoute("/projects", () => createPage(projectsHtml))
  .setNotFound(() => createPage("<h1>404 - Not Found</h1>"))
  .start();
```

### Web Components
Created custom elements for reusable components:
- `<experience-card>`
- `<skill-card>`
- `<education-card>`
- `<project-card>`

### Performance Optimizations
- Lazy loading images with Intersection Observer
- Code splitting
- Modern image formats (WebP, AVIF)
- Minimal JavaScript footprint

## Project Structure

```
src/
├── components/          # Web components
├── navigation/          # Custom router
│   └── router.ts
├── templates/           # Page templates
├── views/              # HTML content
│   ├── home.html
│   └── projects.html
├── main.ts             # Entry point
└── style.css           # Global styles
```

## Deployment Configuration

For Vercel deployment, a simple `vercel.json` handles SPA routing:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Trade-offs

### What I Gained
- Faster builds  
- Better performance  
- Simpler mental model  
- Complete control over routing  
- Smaller bundle size  

### What I Lost
- Server-side rendering (didn't need it)  
- Built-in routing (built my own)  
- React ecosystem (didn't need it for a portfolio)  

## Running the Project

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview
```

## Conclusion

This migration proved that **choosing the right tool for the job matters**. For a portfolio website, vanilla JavaScript with modern tooling (Vite, TypeScript, Web Components) provides all the benefits of a modern development experience without the overhead of a full framework.

**The best code is sometimes less code.**

---

**Live Site:** [timothywhite.dev](https://timothywhite.dev)  
**Build Time:** 8 seconds  
**Bundle Size:** Significantly reduced  
**Lighthouse Score:** AWESOME
