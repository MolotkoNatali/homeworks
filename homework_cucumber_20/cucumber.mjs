export default {
    loader: ['ts-node/esm'],
    format: [
        '@cucumber/pretty-formatter',
        'json:./reports/cucumber.json',
        'html:./reports/cucumber-embedded.html',
        'junit:./reports/cucumber.xml'
    ],
    formatOptions: {
        snippetInterface: 'async-await'
    },
    import: [
        'src/steps/**/*.ts',
        'src/hooks/**/*.ts',
        'src/worlds/**/*.ts',
        'src/pages/**/*.ts',
    ],
    paths: ['features/**/*.feature'], 
    retry: 2
};
