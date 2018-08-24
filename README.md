## web-project-cli

This is a cli to create a simple skeleton of static web project. it generate below structure

```
project_name
│   index.html
|   package.json
|
└───css
│   │   style.css
|
└───script
    │   main.js
```

#### How to use
run ```npm i web-project-cli -g```

#### Current Options
```
╰─$ web-project-cli -h

  Usage: web-project-cli [options]

  Options:

    -V, --version          output the version number
    -n, --name <name>      Give new project name (default: demo)
    -a, --author <author>  Author name (default: )
    -h, --help             output usage information
```

#### For development

- Clone this repo and go inside the folder
- To install in local just do ```sudo npm install -g```
- Create symlink using ```npm link```
