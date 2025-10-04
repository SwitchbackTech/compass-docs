# Compass Documentation Site

**ALWAYS follow these instructions first.** Only fallback to additional search and context gathering if the information in these instructions is incomplete or found to be in error.

Compass Docs is a Docusaurus v3.x documentation site for the Compass calendar application. It provides comprehensive documentation for developers and users of the open-source calendar for minimalists.

## Branch Naming & Commit Message Conventions

### Semantic Branch Naming

**ALWAYS** create branches following this pattern based on the GitHub issue:

- `type/action-issue-number` (e.g., `copilot/fix-spinner`, `feature/add-form`, `bug/fix-auth`)

**Branch Type Prefixes:**

- `feature/` - New features or enhancements
- `bug/` or `bugfix/` - Bug fixes
- `hotfix/` - Critical production fixes
- `copilot/` - GitHub Copilot agent changes
- `refactor/` - Code refactoring without functional changes
- `docs/` - Documentation updates

**Action Keywords:**

- `add-` - Adding new functionality
- `fix-` - Fixing bugs or issues
- `update-` - Updating existing features
- `remove-` - Removing code or features
- `refactor-` - Restructuring code

**Examples:**

- `feature/add-form` - Adding a form
- `bug/fix-auth` - Fixing authentication issue
- `copilot/fix-web-ui` - Copilot agent addressing web UI issue

### Semantic Commit Messages

**ALWAYS**:

- use conventional commit format: `type(scope): description`
- use lower-case for the commit message

**Commit Types:**

- `feat` - New features
- `fix` - Bug fixes
- `docs` - Documentation changes
- `style` - Code style changes (formatting, semicolons, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks, dependency updates

**Message Format Rules:**

- Use present tense: "add feature" not "added feature"
- Keep description under 72 characters
- Include issue number when applicable
- Be specific and descriptive

## Working Effectively

### Bootstrap and Setup

- **Prerequisites**: Node.js >= 16.14 (currently using v20.19.5), yarn package manager (v1.22.22)
- **Dependencies**: Install all dependencies:

  ```bash
  yarn install
  ```

  - **TIMING**: Takes approximately 1-3 minutes depending on cache state. NEVER CANCEL. Set timeout to 300+ seconds.
  - **Expected warnings**: You will see peer dependency warnings - these are normal and do not affect functionality.
  - **Performance**: First install after fresh clone takes longer; subsequent installs are faster due to yarn cache.

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

  - **TIMING**: Takes approximately 50-55 seconds. Set timeout to 120+ seconds.
  - **Output**: Creates static files in `/build` directory
  - **NEVER CANCEL**: Wait for "Generated static files" success message
  - **Performance**: Build time is consistent regardless of cache state

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

## Latest Updates and Best Practices

### Recent Content Additions

- **Enhanced Contribution Guidelines**: `docs/contribute/contribute.md` now includes comprehensive sections on:
  - Experience benefits for contributors (meritocracy, fullstack development, transparency)
  - Recognition and potential compensation details
  - Clear criteria for assessing work quality (code quality, expertise, communication, reliability)
- **Expanded Setup Guide**: `docs/get-started/setup.md` includes new optional third-party integrations:
  - **PostHog Analytics**: For user analytics and error tracking (can be self-hosted)
  - **Kit Email Marketing**: For automated welcome emails to new users
  - **Ngrok Tunneling**: For testing webhook endpoints during development
  - All optional services are clearly marked and can be skipped

### Development Best Practices

- **VSCode Configuration**: .vscode directory is now gitignored to prevent IDE configs from being committed
- **Dependency Management**: Latest versions - Docusaurus 3.8.1, Node.js 20.19.5, Yarn 1.22.22
- **Documentation Structure**: Enhanced organization with clear separation of required vs optional setup steps
- **Third-party Integration**: Compass now supports multiple optional external services for a full-featured development experience

### Content Validation Guidelines

When working with documentation:

- **Check Optional vs Required**: Clearly distinguish between required setup steps and optional integrations
- **Third-party Services**: Verify all external service links and setup instructions are current
- **Environment Variables**: Ensure `.env` file examples match actual service requirements
- **Clear Prerequisites**: Always specify exact version requirements and timing expectations

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

```text
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
├── node_modules/          # Dependencies (gitignored)
└── .vscode/               # VSCode configuration (gitignored)
```

### Key Configuration Files

- `docusaurus.config.js` - Main Docusaurus configuration (site metadata, plugins, theme)
- `sidebars.js` - Documentation sidebar navigation structure
- `package.json` - Dependencies and npm scripts
- `yarn.lock` - Dependency lock file (do not modify manually)
- `babel.config.js` - Babel configuration for JSX/React

### Important Documentation Files

Most frequently accessed documentation:

- `docs/get-started/setup.md` - Initial setup guide for Compass app (now includes PostHog, Kit, and Ngrok)
- `docs/contribute/contribute.md` - Enhanced contribution guidelines with experience benefits and assessment criteria
- `docs/guides/build.md` - Build instructions for Compass app
- `docs/guides/test.md` - Testing guide for Compass app
- `README.md` - Repository overview and quick start

### Recent Documentation Structure Changes

- **Contribution Guidelines**: Now include detailed benefits for contributors and transparent assessment criteria
- **Setup Guide**: Restructured to separate required setup from optional third-party integrations
- **Third-party Services**: PostHog (analytics), Kit (email), and Ngrok (tunneling) are documented as optional add-ons

## Common Development Tasks

### Adding New Documentation

1. Create `.md` files in appropriate `docs/` subdirectory
2. Add frontmatter with `sidebar_position` if needed
3. Update `sidebars.js` if creating new sections
4. Test with dev server to verify rendering and navigation
5. **New Content Guidelines**:
   - Clearly mark optional vs required setup steps
   - Include version-specific information when relevant
   - Link to external services with current URLs
   - Follow the established pattern of overview → instructions → validation

### Editing Existing Documentation

1. Locate file in `docs/` directory
2. Edit markdown content following established patterns:
   - **Setup guides**: Required steps first, optional services in separate section
   - **Contribution docs**: Maintain transparency about assessment criteria and benefits
   - **Technical guides**: Include version requirements and timing expectations
3. Save and verify hot-reload in browser
4. Check for broken links or formatting issues
5. Validate any external service references are current

### Troubleshooting

- **Port conflicts**: Dev server uses port 3001, serve uses port 3000
- **Cache issues**: Run `yarn clear` to clear Docusaurus cache
- **Dependency issues**: Delete `node_modules` and `yarn.lock`, then run `yarn install`
- **Build failures**: Check for markdown syntax errors or broken links
- **VSCode conflicts**: .vscode directory is gitignored to prevent IDE configuration conflicts
- **Version mismatches**: Ensure Node.js >= 16.14 (tested with v20.19.5) and Yarn 1.22.22+

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

<tool_calling>
You have the capability to call multiple tools in a single response. For maximum efficiency, whenever you need to perform multiple independent operations, ALWAYS call tools simultaneously whenever the actions can be done in parallel rather than sequentially.
Especially when exploring repository, searching, reading files, viewing directories, validating changes, reporting progress or replying to comments. For Example you can read 3 different files parallelly, or report progress and edit different files in parallel. Always report progress in parallel with other tool calls that follow it as it does not depend on the result of those calls.
However, if some tool calls depend on previous calls to inform dependent values like the parameters, do NOT call these tools in parallel and instead call them sequentially.
</tool_calling>
