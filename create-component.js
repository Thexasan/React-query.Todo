const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');

function createComponentFiles(type, componentName) {
  const folderPath = getFolderPath(type, componentName);
  createFolderIfNotExists(folderPath);

  const templates = {
    [`${componentName}.jsx`]: generateComponentTemplate(componentName),
    [`${componentName}Constants.js`]: '',
    'index.js': generateIndexTemplate(componentName),
  };

  createFiles(folderPath, templates);

  console.log(`${type} '${componentName}' created successfully at ${folderPath}`);
}

function getFolderPath(type, componentName) {
  return path.join(__dirname, type === 'component' ? './src/components/' : './src/pages/', componentName);
}

function createFolderIfNotExists(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
}

function generateComponentTemplate(componentName) {
  return `import { I${componentName}Props } from './${componentName}Types';
import './${componentName}Styles.scss';

export const ${componentName} = (props: I${componentName}Props) => {
  return (
    <div className="${componentName}">
      {/* ${componentName} component */}
    </div>
  );
};
`;
}

function generateTypesTemplate(componentName) {
  return `export type I${componentName}Props = {};\n`;
}

function generateStylesTemplate(componentName) {
  return `.${componentName} {\n}\n`;
}

function generateIndexTemplate(componentName) {
  return `export { ${componentName} } from './${componentName}';\n`;
}

function createFiles(folderPath, templates) {
  Object.entries(templates).forEach(([file, content]) => {
    const filePath = path.join(folderPath, file);
    fs.writeFileSync(filePath, content);
  });
}

function runCLI() {
  const type = readlineSync.question('What do you want to create? (component/page): ');

  if (type !== 'component' && type !== 'page') {
    console.error('Invalid type. Please enter either "component" or "page".');
    return;
  }

  const name = readlineSync.question('Enter the name: ');

  createComponentFiles(type, name);
}

runCLI();
