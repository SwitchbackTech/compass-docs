# Compass Documentation Site

**ALWAYS follow these instructions first.** Only fallback to additional search and context gathering if the information in these instructions is incomplete or found to be in error.

Compass Docs is a Docusaurus v3 documentation site for the Compass calendar application. It provides comprehensive documentation for developers and users of the open-source calendar for minimalists.

## Working Effectively

### Bootstrap and Setup
- **Prerequisites**: Node.js >= 16.14 (currently using v20.19.4), yarn package manager
- **Dependencies**: Install all dependencies:
  ```bash
  yarn install
  ```
  - **TIMING**: Takes approximately 3 minutes. NEVER CANCEL. Set timeout to 300+ seconds.
  - **Expected warnings**: You will see peer dependency warnings - these are normal and do not affect functionality.

### Development Workflow
- **Start development server**:
  ```bash
  yarn start
  ```
  - **TIMING**: Takes ~20 seconds to compile and start. Set timeout to 60+ seconds.
  - **Port**: Runs on http://localhost:3001 (note: port 3001, not default 3000)
  - **Hot-reload**: Changes to documentation files automatically refresh the browser
  - **NEVER CANCEL**: Wait for "client compiled successfully" message

- **Build for production**:
  ```bash
  yarn build
  ```
  - **TIMING**: Takes approximately 55 seconds. Set timeout to 120+ seconds.
  - **Output**: Creates static files in `/build` directory
  - **NEVER CANCEL**: Wait for "Generated static files" success message

- **Test production build locally**:
  ```bash
  yarn serve
  ```
  - **Port**: Serves on http://localhost:3000 (different from dev server)
  - **Purpose**: Test the production build before deployment

### Other Available Commands
- `yarn docusaurus` - Direct access to Docusaurus CLI
- `yarn swizzle` - Customize Docusaurus theme components
- `yarn deploy` - Deploy to hosting (Vercel deployment via main branch push)
- `yarn clear` - Clear Docusaurus cache
- `yarn write-translations` - Extract translatable strings
- `yarn write-heading-ids` - Generate heading IDs for docs

## Validation

### Manual Testing Requirements
**ALWAYS perform these validation steps after making changes:**

1. **Development Server Validation**:
   - Start dev server: `yarn start`
   - Open http://localhost:3001 in browser
   - Verify homepage loads correctly
   - Navigate to "Get Started" section
   - Test at least 2-3 documentation pages
   - Verify navigation sidebar works
   - Confirm hot-reload works by editing a markdown file

2. **Production Build Validation**:
   - Run `yarn build` successfully
   - Run `yarn serve`
   - Open http://localhost:3000 in browser
   - Verify site loads and navigation works
   - Check that all assets load correctly

3. **Content Validation**:
   - Verify markdown formatting renders correctly
   - Check that code blocks have proper syntax highlighting
   - Ensure all internal links work
   - Confirm images and static assets load

### No Testing Infrastructure
- **No unit tests**: This repository has no test scripts or testing framework
- **No linting**: No ESLint, Prettier, or other code formatting tools configured
- **No CI/CD**: No GitHub Actions workflows - deployment is handled via Vercel on main branch pushes

## Repository Structure

### Key Directories
```
├── docs/                    # All documentation content (Markdown files)
│   ├── contribute/         # Contribution guidelines and processes
│   ├── get-started/        # Setup and installation guides
│   ├── guides/             # How-to guides (build, test, deploy, etc.)
│   └── learn/              # Educational content and concepts
├── blog/                   # Blog posts and announcements
├── src/                    # Custom React components and pages
│   ├── components/         # Reusable React components
│   ├── css/               # Custom CSS styles
│   └── pages/             # Custom pages (non-docs)
├── static/                 # Static assets (images, files, etc.)
├── .docusaurus/           # Generated build cache (gitignored)
├── build/                 # Production build output (gitignored)
└── node_modules/          # Dependencies (gitignored)
```

### Key Configuration Files
- `docusaurus.config.js` - Main Docusaurus configuration (site metadata, plugins, theme)
- `sidebars.js` - Documentation sidebar navigation structure
- `package.json` - Dependencies and npm scripts
- `yarn.lock` - Dependency lock file (do not modify manually)
- `babel.config.js` - Babel configuration for JSX/React

### Important Documentation Files
Most frequently accessed documentation:
- `docs/get-started/setup.md` - Initial setup guide for Compass app
- `docs/contribute/contribute.md` - Contribution guidelines
- `docs/guides/build.md` - Build instructions for Compass app
- `docs/guides/test.md` - Testing guide for Compass app
- `README.md` - Repository overview and quick start

## Common Development Tasks

### Adding New Documentation
1. Create `.md` files in appropriate `docs/` subdirectory
2. Add frontmatter with `sidebar_position` if needed
3. Update `sidebars.js` if creating new sections
4. Test with dev server to verify rendering and navigation

### Editing Existing Documentation
1. Locate file in `docs/` directory
2. Edit markdown content
3. Save and verify hot-reload in browser
4. Check for broken links or formatting issues

### Troubleshooting
- **Port conflicts**: Dev server uses port 3001, serve uses port 3000
- **Cache issues**: Run `yarn clear` to clear Docusaurus cache
- **Dependency issues**: Delete `node_modules` and `yarn.lock`, then run `yarn install`
- **Build failures**: Check for markdown syntax errors or broken links

### Deployment
- **Automatic**: Push to `main` branch triggers Vercel deployment
- **Manual**: Use `yarn deploy` (requires proper Vercel configuration)
- **Testing**: Always test with `yarn build && yarn serve` before pushing to main

## Performance Notes
- **Cold start**: First `yarn start` after `yarn install` may take longer due to cache building
- **Incremental builds**: Subsequent builds are faster due to caching
- **Large changes**: Adding many new pages may increase build time
- **Memory usage**: Large documentation sites may require increased Node.js memory limit

## Compass App Context
This documentation site covers the **Compass calendar application** (separate repository: SwitchbackTech/compass). The docs explain:
- How to set up Compass for development
- API usage and integration guides
- Contributing to the Compass project
- Architecture and design principles

Remember: This is the **documentation site repository**, not the main Compass application repository.