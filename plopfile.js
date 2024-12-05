export default function (plop) {
    // create your generators here
    plop.setGenerator('module', {
        description: 'Plop generator for creating the barebone of a whole module (controller, repository and route)',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Please provide me with a module name'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/api/repositories/{{name}}.repository.ts',
                templateFile: 'tooling/plop_templates/repository.hbs'
            },
            {
                type: 'add',
                path: 'src/api/controllers/{{name}}.controller.ts',
                templateFile: 'tooling/plop_templates/controller.hbs'
            },
            {
                type: 'add',
                path: 'src/api/routes/{{name}}.routes.ts',
                templateFile: 'tooling/plop_templates/route.hbs'
            }
        ]
    });

    plop.setHelper('upperCase', (txt) => txt.charAt(0).toUpperCase() + txt.slice(1));
};
