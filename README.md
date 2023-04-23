![Redradix Icon Library](https://redradix-icons.vercel.app/opengraph.png)

# Redradix Icon Library

## 👀 Preview

https://redradix-icons.vercel.app/

## 🎨 Inspiration / Moodboard

A common style for a strong identity.

The gradient and overlapping layers is a very present element in the RedRadrix identity, so we took it as a differentiating element and basis for the creation of the icon library.

Next, we looked for libraries that also played with gradients as inspiration.

## 🧶 Website

### Principles

#### 👯 Adaptive design

The user's browsing environment is not predictable. That's the idea of "intrinsic web design," an idea based on a 2018 talk by Jen Simmons.
It's all about the use of adaptive design techniques, using mainly flexbox and grid in combination with newer units and functions in a way that allows our designs to adapt at different rates to the available space.

There are no breakpoints on this website. The layout adapts to the available space, and the content adapts to the layout.

#### 👩‍🦽 Accessible

The site aims to be accessible and usable for all people regardless of any disability.
WIP!

#### 🏃‍♀️ Fast

- A lightweight site
- Components such as scripts, fonts and optimized images.
- Caching
- Vercel CDN

### 🔥 API

[...]

### 🌷 CSS

This website uses modern CSS, fluid type & space, flexible layouts and the idea of Progressive Enhancement.

- CSS Metodology: [CUBE](https://cube.fyi/)
- Layout components: [every-layout.dev](https://every-layout.dev/)
- Tailwind: Not used in its original functionality, but as a generator for personalized urility classes, based on our design tokens.

## 🚀 Project Structure

This website uses [Astro](https://astro.build/).
We are still learning about this system, so the benefits are not yet fully realized.

Inside of an Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

In `src/components/`, we put any Astro/React/Vue/Svelte/Preact component.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
