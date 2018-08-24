const getHTMLTemplate = (app) => {
return `<html>
    <head>
        <title>${app.name}</title>
        <link rel="stylesheet" href="./css/style.css">
        <script src="./script/main.js"></script>
    </head>
    <body>
        <h1>Welcome to App template</h1>
    </body>
</html>`
}

const getPackageJsonTemplate = (app) => {
return `{
    "name": "${app.name}",
    "version": "0.0.1",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": ""
    },
    "author": "${app.author}",
    "license": "MIT",
    "dependencies": {}
}`
}

getInitialScript = (app) => {
return `console.log("hello ${app.name}")`
}

getInitialCss = () => {
return `html, body {
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
}`
}

// export default {
//     getHTMLTemplate,
//     getPackageJsonTemplate
// }

exports.default = {
    getHTMLTemplate,
    getPackageJsonTemplate,
    getInitialScript,
    getInitialCss
}