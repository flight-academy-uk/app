# Website Project Documentation

## Project Structure

This project is built using Astro, a modern framework for building fast websites. Below is the detailed breakdown of the project structure.

``` plaintext
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── images/
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── astro.config.mjs
```

### public/

This directory holds static assets that are directly served by the server. These files do not undergo processing by Astro. It includes:

- Images: Static images that don’t require optimisation (e.g. favicons, logos).
- Fonts: Custom font files used throughout the site.
- Favicon: The site’s favicon file.
- robots.txt: Instructions for search engine crawlers.

### src/

The src folder is the core of the application and is structured into the following subdirectories:

#### components/

Holds reusable UI components, divided into:

- Astro Components: .astro files for static content and layouts.
- Svelte Components: .svelte files for interactive functionality.

#### content/

Contains markdown articles and content files. It's organised as follows:

- AI Logs/Insights: Articles focusing on artificial intelligence insights.
- Development/Weekly Updates: Logs or updates related to project development and weekly progress.

This content can be programmatically queried and rendered using Astro’s Content Collection API.

#### images/

Stores raw image files for optimisation by @astrojs/image. These images are processed dynamically for performance.

#### layouts/

Contains layout templates for various pages and content types, such as:

- Page layouts
- Theme layouts
- Markdown layouts

#### pages/

Defines the site’s routes and endpoints.

- Each .astro or .md file represents a page.
- Use this directory to define static and dynamic routes.

#### styles/

Holds global CSS files used across the application. It includes:

- Tailwind base
- Custom tailwind, and other utility classes.
- Fonts

### astro.config.mjs

The Astro configuration file for customising build behavior, integrations, and plugins.

## Development Workflow

As this application is built using SST, please install dependencies from the root of the repository, following that README. When purely developing the frontend, SST does not need to be initialised/connected to live instances/aws, therefore you can simply start the development server to update and view changes live (through Vite hot-reloads).  

### Running the Development Server

Start the local development server:

``` plaintext
npm run dev
```

## Contribution Guidelines

- Follow the directory structure for organising content and components.
- Write reusable and modular components.
- Optimise images by placing them in src/images/ for processing, where possible.
