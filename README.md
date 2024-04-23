# Generate Plop

nj-code-generator is a simple cli for generating new Route and components

1. Generate folder and file for new Route
   Folder with new route name containing following files  
    page.tsx
   page.module.css
   page.spec.tsx

2. Components
   Folder with new Component name containing following files  
    index.tsx
   index.module.css
   index.spec.tsx

## Installation

Run following command at the root level of your project.

### With Yarn

```bash
  yarn add --dev nj-code-generator
```

### With npm

```bash
  npm install nj-code-generator --save-dev
```

## Configuration

Post installation add a script to generate TypeScript files in your package.json.

```bash
  #package.json
  script: {
    ...
    "generate": "generate"
  }
```

## Prerequisite and Dependencies

It works seamlessly with node versions >= ^12.20.0

Its only dependent on following package:

1. [Plop](https://www.npmjs.com/package/plop)
