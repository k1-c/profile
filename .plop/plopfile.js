module.exports = (plop) => {
  plop.setGenerator("fc", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component Name:",
      },
      {
        type: "input",
        name: "dir",
        message: "Directory Name (optional): ",
      },
    ],
    actions: (data) => {
      const path = `../src/components/${data?.dir || ""}/`;
      const actions = [
        {
          type: "add",
          path: path + "{{pascalCase name}}/{{pascalCase name}}.tsx",
          templateFile: "templates/fc/Component.tsx.hbs",
        },
        {
          type: "add",
          path: path + "{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
          templateFile: "templates/fc/Component.stories.tsx.hbs",
        },
        {
          type: "add",
          path: path + "{{pascalCase name}}/index.ts",
          templateFile: "templates/fc/index.ts.hbs",
        },
      ];
      return actions;
    },
  });
  plop.setHelper("trailingSlash", function (text) {
    return text ? `${text}/` : "";
  });
}
