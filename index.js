#!/usr/bin/env node

var shell = require('shelljs');
var chalk = require('chalk');
var program = require('commander');
const templates = require('./template/templates').default;

program
   .version('0.0.1')
   .option('-n, --name <name>', 'Give new project name', 'demo')
   .option('-a, --author <author>', 'Author name', "")
   .parse(process.argv);

console.log(chalk.green("Creating new project "+ program.name));

//creating basic template
if (program.name !== "undefined") {
    shell.mkdir(program.name);
    // Go inside project folder
    shell.cd(program.name);

    // create package.json file
    var app = {
        name: program.name,
        author: program.author
    }

    const html = templates.getHTMLTemplate(app);
    const packageJson = templates.getPackageJsonTemplate(app);
    const jsscript = templates.getInitialScript(app);
    const css  = templates.getInitialCss();
    // Create package.json file
    shell.exec("echo '"+packageJson+"' >>package.json");
    // create html file
    shell.exec("echo '"+html+"' >>index.html");
    // create script file
    shell.mkdir("script");
    shell.exec("echo '"+jsscript+"' >> script/main.js");
    // create css file
    shell.mkdir("css");
    shell.exec("echo '"+css+"' >> css/style.css");
    // install dependencies
    shell.exec('npm install');
    // G0 back from project folder
    shell.cd('..');
    console.log(chalk.yellow("Thanks for using test-cli"));
} else {
    console.log("No project name found");
    console.log(chalk.yellow("Thanks for using test-cli"));
}





