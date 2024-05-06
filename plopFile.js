
export default function (plop) {

  const rootFolder=process.cwd();
  const routePath="/app/";
  const componentPath="/components/";
  plop.setGenerator('NextAppRoute', {
    description: 'Generate a Next App Route structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Route Name:',
        default: 'HelloProgram',
      },
    ],
    actions: [
      {
        type: 'add',
        path:`${rootFolder}${routePath}{{name}}/page.tsx`,
        templateFile: 'plop-templates/page.tsx.hbs',
      },
      {
        type: 'add',
        path:`${rootFolder}${routePath}{{name}}/page.spec.tsx`,
        templateFile: 'plop-templates/page.spec.tsx.hbs',
      },
      {
        type: 'add',
        path:`${rootFolder}${routePath}{{name}}/page.module.css`,
        templateFile: 'plop-templates/page.module.css.hbs',
      },
    ],
  });

  plop.setGenerator('component', {
    description: 'Generate a Component Structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
        default: 'HelloProgram',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${rootFolder}${componentPath}{{name}}/index.tsx`,
        templateFile: 'plop-templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: `${rootFolder}${componentPath}{{name}}/index.spec.tsx`,
        templateFile: 'plop-templates/component.spec.tsx.hbs',
      },
      {
        type: 'add',
        path: `${rootFolder}${componentPath}{{name}}/index.module.css`,
        templateFile: 'plop-templates/component.module.css.hbs',
      },
    ],
  });
};